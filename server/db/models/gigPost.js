const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GigPostSchema = new Schema(
  {
    timeframe: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    equipment: [
      {
        type: String,
        required: true
      }
    ],
    pay: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    photos: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const GigPost = mongoose.model('GigPost', GigPostSchema);
module.exports = GigPost;
