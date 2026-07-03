const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  location: String,
  website: String,
  social: {
    github: String,
    linkedin: String,
    twitter: String,
  },
  skills: [{
    name: { type: String, required: true },
    category: { type: String, required: true },
    level: { type: Number, min: 1, max: 5 },
  }],
  experience: [{
    company: { type: String, required: true },
    role: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: Date,
    description: String,
    highlights: [String],
  }],
  education: [{
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    field: String,
    startYear: Number,
    endYear: Number,
  }],
  avatar: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

profileSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Profile', profileSchema);
