import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const apiUrl = process.env.API_URL

export const fetchVehicles = createAsyncThunk(
  'vehicles/fetchVehicles',
  async () => {
    const response = await axios.get(`${apiUrl}/api/vehicles`)
    return response.data
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
