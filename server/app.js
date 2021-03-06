require('dotenv').config()
const socketIO = require('socket.io');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var webApi = require('./webApi');
var app = express();

var db = require('./mongoose_conn');


db.once('open',()=>{
  console.log('connected');
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  if(process.env.NODE_ENV==='production'){
    res.setHeader('Access-Control-Allow-Origin', '*');
  }

  if(process.env.NODE_ENV==='development'){
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_HOST);
  }
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

//Handle angular preflight requests
app.options('*', function (req, res) {
  res.send(200);
});

app.use('/v1', webApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; 
  // render the error page
console.log(err);
  res.status(err.status || 500);
  res.render('error');
});


var server = app.listen(process.env.SOCKET_PORT);
const io  = socketIO(server);

io.on('connection', (socket) => {
  socket.on('farmer_saved', (data) => {         //server receives message that farmer is saved
    socket.emit('farmer_saved');                //tell every client that farmer is saved
    socket.broadcast.emit('farmer_saved');
  });
});

module.exports = app;
