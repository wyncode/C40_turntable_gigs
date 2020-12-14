const Schema = mongoose.Schema;

const ChatSchema = new Schema(
  {
    messages: [
      {
        type: String,
        required: true
      }
    ],
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    read: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

const Chat = mongoose.model('Chat', ChatSchema);
module.exports = { Chat };
