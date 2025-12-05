const mongoose = require('mongoose');

const tenderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  tenderNumber: {
    type: String,
    required: [true, 'Tender number is required'],
    unique: true,
    trim: true
  },
  department: {
    type: String,
    required: [true, 'Department is required']
  },
  openingDate: {
    type: Date,
    required: [true, 'Opening date is required']
  },
  closingDate: {
    type: Date,
    required: [true, 'Closing date is required']
  },
  category: {
    type: String,
    enum: ['goods', 'services', 'works', 'consultancy'],
    default: 'goods'
  },
  status: {
    type: String,
    enum: ['open', 'closed', 'awarded', 'cancelled'],
    default: 'open'
  },
  documentUrl: String,
  estimatedValue: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Tender', tenderSchema);