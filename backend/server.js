const express = require('express')
const cors = require('cors')
const vehicleRoutes = require('./routes/vehicleRoutes')
const dbConnect = require('./config/db') // Assuming you have a dbConnect function

// Connect to MongoDB
dbConnect()

const app = express()

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

// Middleware to parse incoming JSON requests
app.use(express.json())

// Use CORS middleware
app.use(cors())

// Routes
app.use('/api/vehicles', vehicleRoutes)

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Server Error', error: err.message })
})

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
