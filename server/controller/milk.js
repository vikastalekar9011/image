var Milk = require('../models/Milk');
var exception=require('../utils/exception');


exports.getAll = (req, res, next) => {
  Milk.find({}, (err, milks) => {
    if(err){
      console.log('error in fine milk'+JSON.stringify(err));
      return exception.raiseError(req, res, next, "M001", 500, 'Internal Server Error : in get milk');
    }else{
      req.payload=milks;
      next();
    }
  });
}

exports.create = (req, res, next) => {

var milk=new Milk(req.body);
console.log(req.body);

milk.validate(function(err) {
    if (err)
        console.log(err);
    else
        console.log('pass validate');
});

Milk.create(req.body,(err, data) => {
    if (err){
      console.log('error in add new milk data:::'+JSON.stringify(err));
      return exception.raiseError(req, res, next, "M002", 500, 'Internal Server Error : in milk data');
    }else{
      req.payload=data;
      next();
    }
  });
}
