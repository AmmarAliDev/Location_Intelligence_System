import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import '../styles/MapComponent.scss'
import VehicleDetailsPopup from './VehicleDetailsPopup'
import { fetchLocation } from '../services/mapService'

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const mapId = import.meta.env.VITE_GOOGLE_MAPS_ID

// Default center when no vehicle is selected
const DEFAULT_CENTER = { lat: 25.257384765884733, lng: 55.35874203877398 }

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
    selectedVehicle: Vehicle | null
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
  const [center, setCenter] = useState(DEFAULT_CENTER)

  useEffect(() => {
    if (selectedVehicle) {
      // Fetch address for selected vehicle
      const getAddress = async () => {
        const fetchedAddress = await fetchLocation(
          selectedVehicle.latitude,
          selectedVehicle.longitude
        )
        setAddress(fetchedAddress || 'Location not found')
      }
      getAddress()

      // Update the map center and open the popup when a vehicle is selected
      setCenter({
        lat: selectedVehicle.latitude,
        lng: selectedVehicle.longitude,
      })
      setPopupOpen(true)

      // Set marker for selected vehicle
      if (mapRef.current) {
        const marker = new google.maps.Marker({
          position: {
            lat: selectedVehicle.latitude,
            lng: selectedVehicle.longitude,
          },
          map: mapRef.current,
          title: selectedVehicle.trackerName,
        })

        marker.addListener('click', () => {
          // Logic for marker click (e.g., open vehicle details)
        })

        return () => {
          // Clean up the marker when vehicle is deselected or component unmounts
          marker.setMap(null)
        }
      }
    } else {
      // If no vehicle is selected, reset the address and center the map to default
      setAddress('')
      setCenter(DEFAULT_CENTER)
      setPopupOpen(false)
    }
  }, [selectedVehicle])

  const containerStyle = {
    width: '100%',
    height: '100%',
  }

  return (
    <div className="map-container" style={{ width: '100%' }}>
      {popupOpen && selectedVehicle && (
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
        ></GoogleMap>
      </LoadScript>
    </div>
  )
}

export default MapComponent
