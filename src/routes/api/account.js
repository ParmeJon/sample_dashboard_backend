const express = require('express');

const router = express.Router();

const accountController = require('../../controllers/accountController');

// POST request for creating an Account.
router.post('/accounts/create', accountController.accountCreate);

// GET request for list of all Account.
router.get('/accounts', accountController.accountList);

// GET request for one Account.
router.get('/accounts/:id', accountController.accountDetail);

// POST request to update Account.
router.post('/accounts/:id/edit', accountController.accountUpdate);

// DELETE request to delete Account.
router.delete('/accounts/:id', accountController.accountDelete);

module.exports = router;
