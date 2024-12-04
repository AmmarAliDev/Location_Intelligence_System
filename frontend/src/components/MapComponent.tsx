import { useSelector } from 'react-redux'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY || ''

interface Vehicle {
  _id: string
  latitude: number
  longitude: number
  trackerName: string
}

interface RootState {
  vehicles: Vehicle[]
}

const MapComponent = () => {
  const vehicles = useSelector((state: RootState) => state.vehicles)

  const containerStyle = {
    width: '100%',
    height: '400px',
  }

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  }

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        {vehicles.map((vehicle: Vehicle) => (
          <Marker
            key={vehicle._id}
            position={{ lat: vehicle.latitude, lng: vehicle.longitude }}
            title={vehicle.trackerName}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default MapComponent
