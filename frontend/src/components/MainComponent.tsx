import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedVehicle } from '../redux/selectedVehicleSlice'

import MapComponent from './MapComponent'
import Modal from './Modal'
import VehicleList from './VehicleList'
import VehicleForm from './VehicleForm'

interface Vehicle {
  _id: string
  trackerId: number
  carPlate: string
  latitude: number
  longitude: number
  trackerName: string
}

const MainComponent = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      <Modal isOpen={open} setOpen={setOpen}>
        <VehicleForm setOpen={setOpen} />
      </Modal>
      <div className="vehicle-map-container">
        <VehicleList
          setSelectedVehicle={(vehicle: Vehicle) =>
            dispatch(setSelectedVehicle(vehicle))
          }
        />
        <MapComponent setOpen={setOpen} />
      </div>
    </>
  )
}
export default MainComponent
