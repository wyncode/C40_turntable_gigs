const Schema = mongoose.Schema;

const profileSchema = new Schema({
  about: {
    type: String
  },
  socialMedia: {
    type: String
  },
  music: {
    type: Boolean,
    default: false
  },
  events: {
    type: String
  },
  commendations: {
    type: Boolean,
    default: false
  },
  location: {
    type: String
  },
  reviews: {
    type: Boolean,
    default: false
  },
  photos: {
    type: Boolean,
    default: false
  },
  gigsOpen: {
    type: Boolean,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
