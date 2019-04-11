var express = require('express');
var User = require('../model/User');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAll', (req, res, next) => {
  User.find({}, (err, users) => {
    res.send(users);
  })
})

router.get('/getById/:id', (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    res.send(user);
  })
})

router.post('/create', (req, res, next) => {
  console.log(req.body);
  User.create(req.body, (err, data) => {
    if (err)
      console.log(err);
    res.send(data);
  })
})

router.put('/update', (req, res, next) => {
  console.log(req.body);
  User.updateOne(req.body, (err, data) => {
    if (err)
      console.log(err);
    res.send(data);
  })
})

router.delete('/:id', (req, res, next) => {
  console.log(req.params.id);
  User.findByIdAndDelete(req.params.id, (err, data) => {
    if (err)
      console.log(err);
    res.send(data);
  })
})

module.exports = router;
