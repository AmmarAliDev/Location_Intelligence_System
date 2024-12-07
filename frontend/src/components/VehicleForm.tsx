// /src/components/VehicleForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import '../styles/VehicleForm.scss'
import { addVehicle } from '../redux/vehicleSlice'

interface FormData {
  trackerId: string
  carPlate: string
  latitude: string
  longitude: string
  trackerName: string
}

interface FormErrors {
  trackerId?: string
  carPlate?: string
  latitude?: string
  longitude?: string
  trackerName?: string
}

interface VehicleFormProps {
  setOpen: (value: boolean) => void
}

const VehicleForm: React.FC<VehicleFormProps> = ({ setOpen }) => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState<FormData>({
    trackerId: '',
    carPlate: '',
    latitude: '',
    longitude: '',
    trackerName: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrors({})

    // Basic form validation
    let isValid = true
    const newErrors: FormErrors = {}

    if (!formData.trackerId) {
      newErrors.trackerId = 'Tracker ID is required.'
      isValid = false
    }
    if (!formData.carPlate) {
      newErrors.carPlate = 'Car Plate is required.'
      isValid = false
    }
    if (!formData.latitude || isNaN(Number(formData.latitude))) {
      newErrors.latitude = 'Latitude must be a valid number.'
      isValid = false
    }
    if (!formData.longitude || isNaN(Number(formData.longitude))) {
      newErrors.longitude = 'Longitude must be a valid number.'
      isValid = false
    }
    // if (!formData.trackerName) {
    //   newErrors.trackerName = 'Tracker Name is required.'
    //   isValid = false
    // }

    if (!isValid) {
      setErrors(newErrors)
      return
    }

    // Submit form if valid
    try {
      const response = await dispatch(addVehicle(formData) as any) // Use `as any` to bypass type mismatch with
      console.log('Vehicle added:', response)

      // Thunk actions
      setFormData({
        trackerId: '',
        carPlate: '',
        latitude: '',
        longitude: '',
        trackerName: '',
      })
      if (response?.payload) {
        setOpen(false)
      }
    } catch (error) {
      console.error('Error adding vehicle:', error)
    }
  }

  return (
    <div className="vehicle-form">
      <h2>Add New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tracker ID</label>
          <input
            type="text"
            name="trackerId"
            value={formData.trackerId}
            onChange={handleChange}
          />
          {errors.trackerId && (
            <span className="error">{errors.trackerId}</span>
          )}
        </div>

        <div className="form-group">
          <label>Car Plate</label>
          <input
            type="text"
            name="carPlate"
            value={formData.carPlate}
            onChange={handleChange}
          />
          {errors.carPlate && <span className="error">{errors.carPlate}</span>}
        </div>

        <div className="form-group">
          <label>Latitude</label>
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
          />
          {errors.latitude && <span className="error">{errors.latitude}</span>}
        </div>

        <div className="form-group">
          <label>Longitude</label>
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
          />
          {errors.longitude && (
            <span className="error">{errors.longitude}</span>
          )}
        </div>

        <div className="form-group">
          <label>Tracker Name</label>
          <input
            type="text"
            name="trackerName"
            value={formData.trackerName}
            onChange={handleChange}
          />
          {errors.trackerName && (
            <span className="error">{errors.trackerName}</span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Add Vehicle
        </button>
      </form>
    </div>
  )
}

export default VehicleForm
