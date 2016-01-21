const express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET specific user via id */
router.get('/:id', function (req, res, next) {

});

/* CREATE user */
router.post('/', function (req, res, next) {

});

/* EDIT user via id */
router.put('/:id', function (req, res, next) {

});

/* DELETE a user via id */
router.delete('/:id', function (req, res, next) {

});

export default router;
