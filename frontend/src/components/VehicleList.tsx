import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import '../styles/VehicleList.scss'
import VehicleItem from './VehicleItem'

interface Vehicle {
  _id: string
  trackerId: number
  carPlate: string
  latitude: number
  longitude: number
  trackerName?: string
}

interface RootState {
  vehicles: Vehicle[]
}

const VehicleList = ({ setSelectedVehicle }: any) => {
  const vehicles = useSelector((state: RootState) => state.vehicles)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      (vehicle.trackerName ?? '')
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      vehicle.carPlate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.trackerId.toString().includes(searchTerm)
  )

  return (
    <div className="vehicle-list">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredVehicles.map((vehicle: Vehicle) => (
          <VehicleItem
            key={vehicle.carPlate}
            vehicle={vehicle}
            setSelectedVehicle={setSelectedVehicle}
          />
        ))}
      </ul>
    </div>
  )
}

export default VehicleList
