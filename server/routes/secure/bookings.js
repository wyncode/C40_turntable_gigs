const router = require('express').Router(),
  {
    createBooking,
    getAllBookings,
    getSpecificBooking,
    updateBooking,
    deleteBooking
  } = require('../../controllers/bookings'),
  { venueRole } = require('../../middleware/authorization/index');

router.post('/', venueRole(), createBooking);

router.get('/:id', getSpecificBooking);

router.get('/', getAllBookings);

router.patch('/:id', updateBooking); //venueRole(),

router.delete('/:id', deleteBooking);

module.exports = router;
