const express = require('express')
const vehicleRoutes = require('./routes/vehicleRoutes')
const dbConnect = require('./config/db')
require('dotenv').config()

const app = express()
app.use(express.json()) // Middleware to parse incoming JSON requests

// Connect to MongoDB
dbConnect()

// Routes
app.use('/api/vehicles', vehicleRoutes)

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
