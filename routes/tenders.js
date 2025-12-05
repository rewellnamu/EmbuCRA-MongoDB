const express = require('express');
const router = express.Router();
const {
  getAllTenders,
  getTenderById,
  createTender,
  updateTender,
  deleteTender
} = require('../controllers/tenderController');

router.get('/', getAllTenders);
router.get('/:id', getTenderById);
router.post('/', createTender);
router.put('/:id', updateTender);
router.delete('/:id', deleteTender);

module.exports = router;