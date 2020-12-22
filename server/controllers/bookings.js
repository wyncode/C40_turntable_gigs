const mongoose = require('mongoose'),
  Booking = require('../db/models/booking');

exports.createBooking = async (req, res) => {
  const booking = await new Booking({
    ...req.body,
    owner: req.user._id
  });
  try {
    booking.save();
    res.status(201).json(booking);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.getSpecificBooking = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send('Not a valid booking id');

  try {
    const booking = await Booking.findOne({ _id, owner: req.user._id });
    if (!booking) return res.status(404).send();

    res.json(booking);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

// ***********************************************//
// Get all Bookings
// /bookings?completed=true
// /bookings?limit=10&skip=10
// /bookings?sortBy=createdAt:asc
// /bookings?sortBy=dueDate:desc
// ***********************************************//
exports.getAllBookings = async (req, res) => {
  const match = {},
    sort = {};

  if (req.query.completed) match.completed = req.query.completed === 'true';

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':');
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  }
  try {
    await req.user
      .populate({
        path: 'bookings',
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate();
    res.json(req.user.bookings);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

exports.updateBooking = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['eventDate', 'timeframe'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'Invalid updates!' });
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    updates.forEach((update) => (booking[update] = req.body[update]));
    await booking.save();
    res.json(booking);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json({ message: 'Booking has been deleted' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
