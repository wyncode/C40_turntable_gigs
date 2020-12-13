const Schema = mongoose.Schema;

const BookingSchema = new Schema(
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
    },
    {
        timestamps: true
    }
);

const Booking = ("Booking", BookingSchema );
module.exports = { Booking };