import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// const apiUrl = process.env.API_URL
const apiUrl = 'http://localhost:5000'

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
  async (vehicleData) => {
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
