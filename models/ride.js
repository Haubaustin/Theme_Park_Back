const { Schema } = require('mongoose')

const Ride = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: String, required: true },
    park: { type: Schema.Type.ObjectId, ref: 'parks' }
  },
  { timestamps: true }
)

module.exports = Ride