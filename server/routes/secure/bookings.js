const router = require('express').Router(),
  {
    createBooking,
    getAllBookings,
    getSpecificBooking,
    updateBooking,
    deleteBooking
  } = require('../../controllers/bookings');

router.post('/', createBooking);

router.get('/:id', getSpecificBooking);

router.get('/', getAllBookings);

router.patch('/:id', updateBooking);

router.delete('/:id', deleteBooking);

module.exports = router;
