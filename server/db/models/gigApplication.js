const Schema = mongoose.Schema;

const gigApplicationSchema = new Schema(
  {
    experience: { type: String },
    genre: { type: String },
    equipment: [{ type: String }],
    musicLink: { type: String }
  },
  {
    timestamps: true
  }
);

const GigApplication = mongoose.model('GigApplication', gigApplicationSchema);
module.exports = GigApplication;
