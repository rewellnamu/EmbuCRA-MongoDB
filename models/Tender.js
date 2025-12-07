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
  category: {
    type: String,
    required: [true, 'Category is required']
    // Removed enum - allows any category value
  },
  openingDate: {
    type: Date,
    required: [true, 'Opening date is required']
  },
  closingDate: {
    type: Date,
    required: [true, 'Closing date is required']
  },
  status: {
    type: String,
    enum: ['open', 'closed', 'awarded', 'cancelled'],
    default: 'open'
  },
  value: {
    type: Number,
    default: 0
  },
  documentUrl: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Tender', tenderSchema);