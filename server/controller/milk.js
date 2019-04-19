var Milk = require('../models/Milk');
var exception=require('../utils/exception');


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

exports.getAll = (req, res, next) => {
  Milk.find({}, (err, milks) => {
    if(err){
      console.log('error in fine milk'+JSON.stringify(err));
      return exception.raiseError(req, res, next, "U001", 500, 'Internal Server Error : in Create User');
    }else{
      req.payload=milks;
      next();
    }
  });
}

// router.get('/getById/:id', (req, res, next) => {
//   Milk.findById(req.params.id, (err, user) => {
//     res.send(user);
//   })
// })

exports.create = (req, res, next) => {
  Milk.create(req.body, (err, data) => {
    if (err){
      console.log('error in add new milk data:::'+JSON.stringify(err));
    }else{
      req.payload=data;
      next();
    }
  })
}

// router.put('/update', (req, res, next) => {
//   Milk.updateOne(req.body, (err, data) => {
//     if (err)
//       console.log(err);
//     res.send(data);
//   })
// })

// router.delete('/:id', (req, res, next) => {
//    Milk.findByIdAndDelete(req.params.id, (err, data) => {
//     if (err)
//       console.log(err);
//     res.send(data);
//   })
// })
