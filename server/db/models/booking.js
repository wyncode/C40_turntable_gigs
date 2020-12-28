const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    eventDate: {
      type: String,
      required: true
    },
    timeframe: {
      type: String,
      required: true
    },
    payAmount: {
      type: Number,
      required: true
    },
    venueName: {
      type: String,
      required: true
    },
    venueLocation: {
      type: String,
      required: true
    },
    paymentMethod: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
