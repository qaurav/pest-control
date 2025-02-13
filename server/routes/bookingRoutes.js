const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createBooking,
  getBookings,
  updateBooking
} = require('../controllers/bookingController');

router.post('/', createBooking);
router.get('/', auth, getBookings);
router.patch('/:id', auth, updateBooking);

module.exports = router;
