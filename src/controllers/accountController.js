const Account = require('../models/Account');

const accountCreate = (req, res) => {
  res.send('NOT IMPLEMENTED: Account Create');
};

const accountList = (req, res) => {
  res.send('NOT IMPLEMENTED: Account List');
};

const accountDetail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Account Detail: ${req.params.id}`);
};

const accountUpdate = (req, res) => {
  res.send('NOT IMPLEMENTED: Account Update');
};

const accountDelete = (req, res) => {
  res.send(`NOT IMPLEMENTED: Account delete POST: ${req.params.id}`);
};

module.exports = {
  accountCreate,
  accountList,
  accountDetail,
  accountUpdate,
  accountDelete,
};
