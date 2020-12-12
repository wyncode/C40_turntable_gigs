const Schema = mongoose.Schema;

const GigApplication = new Schema(
    {
        experience: { type: String },
        genre: { type: String },
        equipment: [{ type: String }],
        musicLink: { type: String },
    },
    { timestamps: true }
);

const GigApplication = mongoose.model("GigApplication", GigApplicationSchema);
module.exports = { GigApplication };