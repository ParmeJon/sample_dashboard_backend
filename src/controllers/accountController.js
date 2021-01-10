const Account = require('../models/account');

const accountCreate = async (req, res) => {
  try {
    const account = new Account(req.body);
    await account.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const accountList = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.send(accounts);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const accountDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await Account.findById(id);
    res.send(account);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const accountUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAccount = await Account.findByIdAndUpdate(id, req.body, { new: true });
    res.send(updatedAccount);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const accountDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await Account.findByIdAndDelete(id);
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = {
  accountCreate,
  accountList,
  accountDetail,
  accountUpdate,
  accountDelete,
};
