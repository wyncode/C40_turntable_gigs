const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gigApplicationSchema = new Schema(
  {
    experience: { type: String },
    genre: { type: String },
    equipment: [{ type: String }],
    musicLink: { type: String },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },

  {
    timestamps: true
  }
);

const GigApplication = mongoose.model('GigApplication', gigApplicationSchema);
module.exports = GigApplication;
