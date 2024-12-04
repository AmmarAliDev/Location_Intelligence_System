import { useEffect } from 'react'
import './styles/App.scss'
import { useDispatch } from 'react-redux'

import VehicleList from './components/VehicleList'
import MapComponent from './components/MapComponent'
import { fetchVehicles } from './redux/vehicleSlice'

function App() {
  const dispatch: any = useDispatch()

  useEffect(() => {
    // Fetch all vehicles when the app loads
    dispatch(fetchVehicles())
  }, [dispatch])
  return (
    <div className="App">
      <h1>Location Intelligence System</h1>
      <div className="vehicle-map-container">
        <VehicleList />
        <MapComponent />
      </div>
    </div>
  )
}

export default App
