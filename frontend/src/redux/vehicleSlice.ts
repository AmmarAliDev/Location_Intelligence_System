import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
interface VehicleData {
  trackerId: string
  carPlate: string
  latitude: string
  longitude: string
  trackerName: string
}

const apiUrl = import.meta.env.VITE_API_HOST

export const fetchVehicles = createAsyncThunk(
  'vehicles/fetchVehicles',
  async () => {
    const response = await axios.get(`${apiUrl}/api/vehicles`)
    return response.data
  }
)

// Add vehicle action
export const addVehicle = createAsyncThunk(
  'vehicles/addVehicle',
  async (vehicleData: VehicleData) => {
    try {
      const response = await axios.post(`${apiUrl}/api/vehicles`, vehicleData)
      return response.data
    } catch (error) {
      console.error('Error adding vehicle:', error)
      throw new Error('Error adding vehicle')
    }
  }
)

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVehicles.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export default vehiclesSlice.reducer
