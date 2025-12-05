const Tender = require('../models/Tender');

exports.getAllTenders = async (req, res, next) => {
  try {
    const tenders = await Tender.find().sort({ createdAt: -1 });
    res.json(tenders);
  } catch (error) {
    next(error);
  }
};

exports.getTenderById = async (req, res, next) => {
  try {
    const tender = await Tender.findById(req.params.id);
    if (!tender) {
      return res.status(404).json({ error: 'Tender not found' });
    }
    res.json(tender);
  } catch (error) {
    next(error);
  }
};

exports.createTender = async (req, res, next) => {
  try {
    const tender = await Tender.create(req.body);
    res.status(201).json(tender);
  } catch (error) {
    next(error);
  }
};

exports.updateTender = async (req, res, next) => {
  try {
    const tender = await Tender.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!tender) {
      return res.status(404).json({ error: 'Tender not found' });
    }
    res.json(tender);
  } catch (error) {
    next(error);
  }
};

exports.deleteTender = async (req, res, next) => {
  try {
    const tender = await Tender.findByIdAndDelete(req.params.id);
    if (!tender) {
      return res.status(404).json({ error: 'Tender not found' });
    }
    res.json({ message: 'Tender deleted successfully' });
  } catch (error) {
    next(error);
  }
};