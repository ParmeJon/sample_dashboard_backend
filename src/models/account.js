const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
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

export default Account;
