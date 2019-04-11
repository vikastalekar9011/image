var express = require('express');
var router = express.Router();
var Milk = require('../model/Milk');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getAll', (req, res, next) => {
  Milk.find({}, (err, users) => {
    res.send(users);
  })
})

router.get('/getById/:id', (req, res, next) => {
  Milk.findById(req.params.id, (err, user) => {
    res.send(user);
  })
})

router.post('/create', (req, res, next) => {
  Milk.create(req.body, (err, data) => {
    if (err)
      console.log(err);
    res.send(data);
  })
})

router.put('/update', (req, res, next) => {
  Milk.updateOne(req.body, (err, data) => {
    if (err)
      console.log(err);
    res.send(data);
  })
})

router.delete('/:id', (req, res, next) => {
   Milk.findByIdAndDelete(req.params.id, (err, data) => {
    if (err)
      console.log(err);
    res.send(data);
  })
})

module.exports = router;
