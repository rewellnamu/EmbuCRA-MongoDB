const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  excerpt: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    enum: ['announcement', 'event', 'news', 'press-release'],
    default: 'news'
  },
  author: {
    type: String,
    default: 'Embu County Government'
  },
  imageUrl: String,
  published: {
    type: Boolean,
    default: false
  },
  publishedDate: {
    type: Date
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('News', newsSchema);