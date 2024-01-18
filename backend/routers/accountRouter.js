const express = require('express');
const { updateAccount } = require('../controller/accountController');
const accountRouter = express.Router();

accountRouter.route('/updateAccount')
    .post(updateAccount);

module.exports = accountRouter;