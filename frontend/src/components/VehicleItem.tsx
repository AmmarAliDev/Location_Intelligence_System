interface Vehicle {
  trackerName: string
  carPlate: string
  latitude: number
  longitude: number
}

const VehicleItem = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <li className="vehicle-item">
      <span>{vehicle.trackerName}</span> - <span>{vehicle.carPlate}</span>
    </li>
  )
}

export default VehicleItem
