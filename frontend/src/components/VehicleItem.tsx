interface Vehicle {
  _id: string
  trackerId: number
  trackerName: string
  carPlate: string
  latitude: number
  longitude: number
}

const VehicleItem = ({
  vehicle,
  setSelectedVehicle,
}: {
  vehicle: Vehicle
  setSelectedVehicle: any
}) => {
  return (
    <li
      className="vehicle-item"
      onClick={() => {
        console.log('vehicle:', vehicle)

        setSelectedVehicle(vehicle)
      }}
    >
      <span>{vehicle.trackerName}</span> <span>{vehicle.carPlate}</span>
      <span>{vehicle.trackerId}</span>
    </li>
  )
}

export default VehicleItem
