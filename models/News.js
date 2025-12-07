const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  summary: {  // Changed from 'excerpt'
    type: String,
    required: [true, 'Summary is required'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required']
    // Removed enum to allow frontend categories
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    default: 'County Communications'
  },
  publishDate: {  // Changed from 'publishedDate'
    type: Date,
    required: [true, 'Publish date is required']
  },
  featured: {  // Added
    type: Boolean,
    default: false
  },
  imageUrl: String,
  tags: [String]  // Added
}, {
  timestamps: true
});

module.exports = mongoose.model('News', newsSchema);