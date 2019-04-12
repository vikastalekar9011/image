var User = require('../model/User');
var exception=require('../utils/exception');
// var router = express.Router();

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });



exports.getAll = (req, res, next) => {
  User.find({}, (err, users) => {
    if(err){
      return exception.raiseError(req, res, next, "U000", 500, 'Internal Server Error : in find User')
    }else{
      req.payload=users;
      next();
    }
  });
}

// router.get('/getById/:id', (req, res, next) => {
//   User.findById(req.params.id, (err, user) => {
//     res.send(user);
//   })
// })

exports.create =  (req, res, next) => {
  User.create(req.body, (err, data) => {
    if (err){
    console.log('error in create user'+JSON.stringify(err));
    return exception.raiseError(req, res, next, "U001", 500, 'Internal Server Error : in Create User');
    } else {
     req.payload=data;
     next();
    }
  })
}
exports.login = (req, res, next) => {
  console.log(req.body);
   User.findOne({mobile:req.body.mobile, password:req.body.password, status:'Active'},{role:1},
   function(err,user){
    if (err || !user) {
      console.log('error in create user'+JSON.stringify(err));
      return exception.raiseError(req, res, next, "U002", 500, 'Username and Password not matched');  
    } else {
      req.payload=user;
      next();
    }
   });
}

// router.put('/update', (req, res, next) => {
//   console.log(req.body);
//   User.updateOne(req.body, (err, data) => {
//     if (err)
//       console.log(err);
//     res.send(data);
//   })
// })

// router.delete('/:id', (req, res, next) => {
//   console.log(req.params.id);
//   User.findByIdAndDelete(req.params.id, (err, data) => {
//     if (err)
//       console.log(err);
//     res.send(data);
//   })
// })
