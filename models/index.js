const mongoose = require('mongoose')
const ParkSchema = require('./park')
const RideSchema = require('./ride')

const Park = mongoose.model('parks', ParkSchema)
const Ride = mongoose.model('rides', RideSchema)

module.exports = {
  Park,
  Ride
}