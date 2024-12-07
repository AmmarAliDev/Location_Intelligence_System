import { useState } from 'react'
import MapComponent from './MapComponent'
import Modal from './Modal'
import VehicleList from './VehicleList'
import VehicleForm from './VehicleForm'

const MainComponent = () => {
  const [open, setOpen] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null)
  console.log('selectedVehicle:', selectedVehicle)

  return (
    <>
      <Modal isOpen={open} setOpen={setOpen}>
        <VehicleForm setOpen={setOpen} />
      </Modal>
      <div className="vehicle-map-container">
        <VehicleList setSelectedVehicle={setSelectedVehicle} />
        <MapComponent selectedVehicle={selectedVehicle} setOpen={setOpen} />
      </div>
    </>
  )
}
export default MainComponent
