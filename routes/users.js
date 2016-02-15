var express = require('express');
var Users = require('../models/users/collection');
var User = require('../models/users/model');
var UserController = require('../controllers/UserController');
var router = express.Router();

/* GET users listing. */
router.get('/', UserController.getUserList);

/* GET specific user via id */
router.get('/:id', UserController.getSpecificUser);

/* CREATE user */
router.post('/', UserController.createUser);

/* EDIT user via id */
router.put('/:id', UserController.editUser);

/* DELETE a user via id */
router.delete('/:id', UserController.deleteUser);

module.exports = router;