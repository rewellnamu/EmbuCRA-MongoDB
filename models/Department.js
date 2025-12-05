const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Department name is required'],
    trim: true
  },
  shortName: {
    type: String,
    trim: true
  },
  icon: {
    type: String,
    default: 'building'
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  revenueStreams: [{
    name: {
      type: String,
      required: true
    },
    description: String
  }],
  totalRevenue: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Department', departmentSchema);