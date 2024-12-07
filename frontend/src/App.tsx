import { useEffect } from 'react'
import './styles/App.scss'
import { useDispatch } from 'react-redux'

import VehicleList from './components/VehicleList'
import MapComponent from './components/MapComponent'
import { fetchVehicles } from './redux/vehicleSlice'
import VehicleForm from './components/VehicleForm'
import MainComponent from './components/MainComponent'

function App() {
  const dispatch: any = useDispatch()

  useEffect(() => {
    // Fetch all vehicles when the app loads
    dispatch(fetchVehicles())
  }, [dispatch])
  return (
    <div className="App">
      {/* <h1>Location Intelligence System</h1> */}
      {/* <VehicleForm /> */}
      <MainComponent />
    </div>
  )
}

export default App
