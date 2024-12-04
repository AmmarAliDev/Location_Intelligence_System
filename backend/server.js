const cors = require('cors')
const express = require('express')
require('dotenv').config()

const dbConnect = require('./config/db')
const vehicleRoutes = require('./routes/vehicleRoutes')

const app = express()
// Connect to MongoDB
dbConnect()

app.use('/api/vehicles', cors(), vehicleRoutes)

// Routes
app.use(express.json()) // Middleware to parse incoming JSON requests

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
