// boiler plate schema for park.js 
//schema
const { Schema } = require('mongoose')

const Park = new Schema (
{
    name: { type: String, required: true },
    location: { type: String, required: true },
    url: { type: String, required: true },
    avg_price: { type: Number, required: true },
    img: { type: String, required: true }
},
{ timestamps: true }
)

module.exports = Park