const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  experiences: [{
    type: Schema.Types.ObjectId,
    ref: "Experience"
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;