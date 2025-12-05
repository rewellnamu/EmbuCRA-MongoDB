const News = require('../models/News');

exports.getAllNews = async (req, res, next) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (error) {
    next(error);
  }
};

exports.getNewsById = async (req, res, next) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ error: 'News not found' });
    }
    res.json(news);
  } catch (error) {
    next(error);
  }
};

exports.createNews = async (req, res, next) => {
  try {
    const news = await News.create(req.body);
    res.status(201).json(news);
  } catch (error) {
    next(error);
  }
};

exports.updateNews = async (req, res, next) => {
  try {
    const news = await News.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!news) {
      return res.status(404).json({ error: 'News not found' });
    }
    res.json(news);
  } catch (error) {
    next(error);
  }
};

exports.deleteNews = async (req, res, next) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      return res.status(404).json({ error: 'News not found' });
    }
    res.json({ message: 'News deleted successfully' });
  } catch (error) {
    next(error);
  }
};