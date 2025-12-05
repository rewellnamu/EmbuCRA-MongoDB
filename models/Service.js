const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Service name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  department: {
    type: String,
    required: [true, 'Department is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  requirements: [String],
  fee: {
    type: Number,
    default: 0
  },
  processingTime: {
    type: String,
    default: '1-3 business days'
  },
  icon: {
    type: String,
    default: 'file'
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Service', serviceSchema);