import '../styles/VehicleDetailsPopup.scss'

interface Vehicle {
  trackerName: string
  carPlate: string
  latitude: number
  longitude: number
}

const VehicleDetailsPopup = ({
  vehicle,
  address,
  setOpen,
}: {
  vehicle: Vehicle
  address: string
  setOpen: any
}) => {
  return (
    <div className="vehicle-details-popup">
      <button className="cross-button" onClick={() => setOpen(false)}>
        x
      </button>
      <h5>{vehicle?.trackerName}</h5>
      <p>{address}</p>
      {/* <p>Latitude: {vehicle.latitude}</p>
      <p>Longitude: {vehicle.longitude}</p> */}
    </div>
  )
}

export default VehicleDetailsPopup
