require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const logger = require('morgan');
const multer = require('multer')
const app = express();
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

const usersRouter = require('./routes/users');
const plantsRouter = require('./routes/plants');
const plantCareRouter = require("./routes/plant-care");
const myPlantCreateRouter = require("./routes/plant/myPlantCreate");
const authRouter = require('./routes/auth-routes');



app.use('/users', usersRouter);
app.use("/plants", plantsRouter);
app.use("/plant-care", plantCareRouter);
app.use("/add", myPlantCreateRouter);
app.use("/users", authRouter);

app.use("/", upload.single('image'), require('./routes/myJungle'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {


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
