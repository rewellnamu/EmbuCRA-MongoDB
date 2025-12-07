const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {  // Changed from 'name'
    type: String,
    required: [true, 'Service title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  department: {  // Keep this but make it optional since frontend doesn't always send it
    type: String,
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  icon: {
    type: String,
    default: 'file'
  },
  fees: {  // Changed from 'fee' (number) to 'fees' (string)
    type: String,
    default: 'Free'
  },
  requirements: [String],
  processingTime: {
    type: String,
    default: '1-3 business days'
  },
  location: [String],  // Added
  digitalAvailable: {  // Added
    type: Boolean,
    default: false
  },
  featured: {  // Added
    type: Boolean,
    default: false
  },
  contactInfo: {  // Added
    type: String,
    trim: true
  },
  active: {  // Keep this for backend management
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Service', serviceSchema);