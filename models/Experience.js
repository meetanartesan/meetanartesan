const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  imgName: String,
  imgPath: String,
  imgPublicId: String,
  title: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
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