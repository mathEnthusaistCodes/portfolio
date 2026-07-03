const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: String,
  technologies: [String],
  category: { type: String, required: true },
  imageUrl: String,
  demoUrl: String,
  repoUrl: String,
  featured: { type: Boolean, default: false },
  startDate: Date,
  endDate: Date,
  highlights: [String],
  status: {
    type: String,
    enum: ['completed', 'in-progress', 'planned'],
    default: 'completed',
  },
  metrics: {
    stars: Number,
    forks: Number,
    contributors: Number,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

projectSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Project', projectSchema);
