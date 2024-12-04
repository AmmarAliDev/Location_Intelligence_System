import { useSelector } from 'react-redux'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import '../styles/MapComponent.scss'

// const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY || ''
const googleMapsApiKey = 'AIzaSyBDBbqbjXB1eB_TjZIKhNynZkdGVgI3kgs'

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
    height: '88vh',
  }

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  }

  // TEMP
  const tempVehicle = {
    _id: '1',
    latitude: 37.7749,
    longitude: -122.4194,
    trackerName: 'Test Vehicle',
  }

  return (
    <div className="map-container" style={{ width: '100%' }}>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
          {/* {vehicles.map((vehicle: Vehicle) => (
          <Marker
            key={vehicle._id}
            position={{ lat: vehicle.latitude, lng: vehicle.longitude }}
            title={vehicle.trackerName}
          />
        ))} */}
          <Marker
            key={tempVehicle._id}
            position={{ lat: tempVehicle.latitude, lng: tempVehicle.longitude }}
            title={tempVehicle.trackerName}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default MapComponent
