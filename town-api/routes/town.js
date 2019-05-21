const router = require('express').Router();
const {
  getAll,
} = require('../controller/town');

router.get('/', getAll);

module.exports = router;