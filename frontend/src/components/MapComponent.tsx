import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import '../styles/MapComponent.scss'
import VehicleDetailsPopup from './VehicleDetailsPopup'
import { fetchLocation } from '../services/mapService'

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const mapId = import.meta.env.VITE_GOOGLE_MAPS_ID
console.log('googleMapsId:', mapId)

interface Vehicle {
  _id: string
  trackerId: number
  carPlate: string
  latitude: number
  longitude: number
  trackerName: string
}

interface RootState {
  vehicles: Vehicle[]
  selectedVehicle: {
    selectedVehicle: Vehicle
  }
}

const MapComponent = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
  const selectedVehicle = useSelector(
    (state: RootState) => state.selectedVehicle.selectedVehicle
  )
  console.log('selectedVehicle:????????????', selectedVehicle)

  const [address, setAddress] = useState<string>('')
  const mapRef = useRef<google.maps.Map | null>(null)
  const [popupOpen, setPopupOpen] = useState(true)
  const [center, setCenter] = useState({
    lat: 25.257384765884733,
    lng: 55.35874203877398,
  })

  useEffect(() => {
    const getAddress = async () => {
      const address = await fetchLocation(
        selectedVehicle?.latitude,
        selectedVehicle?.longitude
      )
      setAddress(address || 'Location not found')
    }
    getAddress()
  }, [selectedVehicle])

  useEffect(() => {
    if (mapRef.current) {
      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: {
          lat: selectedVehicle?.latitude,
          lng: selectedVehicle?.longitude,
        },
        map: mapRef.current,
        title: selectedVehicle?.trackerName,
      })

      marker.addListener('click', () => {
        // setAddress(selectedVehicle?.trackerName)
      })
    }
  }, [selectedVehicle])

  useEffect(() => {
    if (selectedVehicle) {
      setCenter({
        lat: selectedVehicle.latitude,
        lng: selectedVehicle.longitude,
      })
      setPopupOpen(true)
    }
  }, [selectedVehicle])

  const containerStyle = {
    width: '100%',
    height: '88vh',
  }

  return (
    <div className="map-container" style={{ width: '100%' }}>
      {popupOpen && (
        <VehicleDetailsPopup
          vehicle={selectedVehicle}
          address={address}
          setOpen={setPopupOpen}
        />
      )}
      <div className="edit-container" onClick={() => setOpen(true)}>
        <img src="/edit-icon.svg" alt="" />
      </div>
      <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={['marker']}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          onLoad={(map) => {
            mapRef.current = map
          }}
          options={{ mapId }}
        >
          {/* Markers are added via useEffect */}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default MapComponent
