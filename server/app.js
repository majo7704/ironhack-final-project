require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const logger = require('morgan');
const multer = require('multer')
const app = express();
const usersRouter = require('./routes/users');
const mongoose = require('mongoose');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const cors = require('cors')

app.use(cors({
  origin: true, //sendig the cookies back and forth
  credentials: true
}));
//
app.use(session({
  secret: 'super secret',
  cookie: { maxAge: 600000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60
  }),
  resave: false,
  saveUninitialized: true
}))

mongoose.connect(process.env.DB, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo');
  }).catch(err => {
    console.log('Error connecting to mongo', err)
  })

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


let upload = multer({ dest: "public/images" })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))



app.use(cookieParser());

let protectRoute = function (req, res, next) {
  debugger
  if (req.session.user) next();
  // else res.redirect("/login")
  else res.status(403).json({errorMessage: "Unauthorized"})
}

app.use('/users', usersRouter);
app.use("/plant-care", require("./routes/plant-care"));

app.use("/users", require("./routes/auth-routes"));
// app.use("/users", require('./routes/auth-routes'))
//app.use("/plants", protectRoute, require('./routes/plants'))

app.use("/", protectRoute, upload.single('image'), require('./routes/myJungle'))

// app.use('/', protectRoute, require('./routes/allPlants'))
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  debugger
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});


// app.listen(process.env.PORT, () => {
//   console.log('I am listening on', process.env.PORT)
// })
module.exports = app;
