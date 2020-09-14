const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  pictureUrl: String,
  title: {
    type: String,
    required: true,
  },
  user: String,
  description: {
    type: String,
    required: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
    city: String,
    country: String,
  }
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;