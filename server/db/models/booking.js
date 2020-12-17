const Schema = mongoose.Schema;

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
    }
  },
  {
    timestamps: true
  }
);

const Booking = ('Booking', bookingSchema);
module.exports = Booking;
