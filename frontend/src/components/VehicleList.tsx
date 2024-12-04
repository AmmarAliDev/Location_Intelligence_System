// /src/components/VehicleList.js
import { useSelector } from 'react-redux'

import './VehicleList.scss'
import VehicleItem from './VehicleItem'

interface Vehicle {
  trackerName: string
  carPlate: string
  latitude: number
  longitude: number
  // add other properties of Vehicle here
}

interface RootState {
  vehicles: Vehicle[]
}

const VehicleList = () => {
  const vehicles = useSelector((state: RootState) => state.vehicles)

  return (
    <div className="vehicle-list">
      <h2>Vehicles</h2>
      <ul>
        {vehicles.map((vehicle: Vehicle) => (
          <VehicleItem key={vehicle.carPlate} vehicle={vehicle} />
        ))}
      </ul>
    </div>
  )
}

export default VehicleList
