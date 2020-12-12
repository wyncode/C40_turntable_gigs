const Schema = mongoose.Schema;

const ChatSchema = new Schema(
    {
        messages: [{ type: String, required: true }],
        sender: { type: String, required: true },
        read: { type: Date },
    },
    { timestamps: true }
);

const Chat = mongoose.model("Chat", ChatSchema);
module.exports = { Chat };