const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
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
  travelWilling: {
    type: Boolean,
    default: false
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
  }
});

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = { Profile };
