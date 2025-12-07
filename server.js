const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger');

// ========================================
// CONFIGURATION - Update these values
// ========================================
const CONFIG = {
  PORT: 3000,
  NODE_ENV: 'development', // Change to 'production' when deploying
  MONGODB_URI: 'mongodb+srv://rewell:123456789rewell@cluster0.gchafb5.mongodb.net/embucra',
  ALLOWED_ORIGINS: [
    'http://localhost:4200',
    'https://embu-cra-v2.vercel.app'
  ]
};

const app = express();
const PORT = CONFIG.PORT;

// Connect to MongoDB - Pass the URI directly
connectDB(CONFIG.MONGODB_URI).catch(err => {
  console.error('Failed to connect to MongoDB:', err);
});

// Middleware
app.use(cors({
  origin: CONFIG.ALLOWED_ORIGINS,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Embu County API is running',
    environment: CONFIG.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/api/departments', require('./routes/departments'));
app.use('/api/news', require('./routes/news'));
app.use('/api/tenders', require('./routes/tenders'));
app.use('/api/services', require('./routes/services'));

// 404 handler - must come after all other routes
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl 
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${CONFIG.NODE_ENV}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;