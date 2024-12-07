import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface VehicleData {
  trackerId: string
  carPlate: string
  latitude: string
  longitude: string
  trackerName: string
}

interface VehicleState {
  vehicles: VehicleData[]
  selectedVehicle: VehicleData | null
}

// const apiUrl = process.env.API_URL
const apiUrl = import.meta.env.BASE_URL

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

const initialState: VehicleState = {
  vehicles: [],
  selectedVehicle: null,
}

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setSelectedVehicle(state, action: PayloadAction<VehicleData>) {
      state.selectedVehicle = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVehicles.fulfilled, (state, action) => {
      state.vehicles = action.payload
    })
  },
})

export const { setSelectedVehicle } = vehiclesSlice.actions
export default vehiclesSlice.reducer
