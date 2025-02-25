const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: [
      'wedding',
      'business',
      'baby',
      'pre-wedding',
      'maternity',
      'personal',
      'family',
      'travel',
      'post-wedding',
      'other',
    ],
  },
  link: {
    type: String,
    required: true,
  },
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
