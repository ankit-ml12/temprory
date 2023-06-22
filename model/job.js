const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      require: [true, 'company name is necessary'],
    },
    position: {
      type: String,
      required: [true, 'please provide user position'],
    },
    status: {
      type: String,
      enum: ['interview', 'decline', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'please provide user'],
    },
  },
  { timestamps: ture }
)

module.exports = mongoose.model('Job', JobSchema)
