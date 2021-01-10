const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema(
  {
    seedId: {
      type: String,
      required: false,
    },
    balance: String,
    credit: Number,
    picture: String,
    name_first: String,
    name_last: String,
    employer: String,
    email: String,
    phone: Number,
    address: String,
    comments: String,
    tags: [String],
  },
  { timestamps: true },
);

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
