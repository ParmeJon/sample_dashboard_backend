const express = require('express');

const router = express.Router();

const accountController = require('../../controllers/accountController');

// POST request for creating an Account.
router.post('/account/create', accountController.accountCreate);

// GET request for list of all Account.
router.get('/accounts', accountController.accountList);

// GET request for one Account.
router.get('/account/:id', accountController.accountDetail);

// POST request to update Account.
router.post('/account/:id/update', accountController.accountUpdate);

// POST request to delete Account.
router.post('/account/:id/delete', accountController.accountDelete);

module.exports = router;
