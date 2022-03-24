const mongoose = require('mongoose')
const ParkSchema = require('./park')
const RideSchema = require('./ride')
const PackageSchema = require('./packages')

const Park = mongoose.model('parks', ParkSchema)
const Ride = mongoose.model('rides', RideSchema)
const Package = mongoose.model('packages', RideSchema)

module.exports = {
  Park,
  Ride,
  Package
}