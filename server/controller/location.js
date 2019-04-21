var Location = require('../models/Location');
var exception=require('../utils/exception');


exports.getAll = (req, res, next) => {
    Location.find({}, (err, locations) => {
    if(err){
      console.log('error in fetching locations '+JSON.stringify(err));
      return exception.raiseError(req, res, next, "L001", 500, 'Internal Server Error : Fetching Location List');
    }else{
      req.payload=locations;
      next();
    }
  });
}

exports.create = (req, res, next) => {
  Location.create(req.body, (err, data) => {
    if (err){
      console.log('error in add new location data:::'+JSON.stringify(err));
      return exception.raiseError(req, res, next, "L001", 500, 'Internal Server Error : Fetching Location List');
    }else{
      req.payload=data;
      next();
    }
  })
}


