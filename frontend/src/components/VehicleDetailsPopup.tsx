interface Vehicle {
  trackerName: string
  carPlate: string
  latitude: number
  longitude: number
}

const VehicleDetailsPopup = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <div className="vehicle-details-popup">
      <h3>{vehicle.trackerName}</h3>
      <p>Car Plate: {vehicle.carPlate}</p>
      <p>Latitude: {vehicle.latitude}</p>
      <p>Longitude: {vehicle.longitude}</p>
    </div>
  )
}

export default VehicleDetailsPopup
