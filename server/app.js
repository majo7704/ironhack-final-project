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
const User = require("./models/User")
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
app.use(express.static(path.join(__dirname, 'build')));


let upload = multer({ dest: "public/images" });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());

let protect = function (req, res, next) {
  if (req.session.user) {
    // refersh session data
    User.findById(req.session.user._id)
      .then((user) => {
        req.session.user = user;
        next();
      })
      .catch((error) => {
        createError(500, error.message)
      })
  }
  else res.status(403).json({errorMessage: "Unauthorized"})
}

const plantsRouter = require('./routes/plants');
const plantCareRouter = require("./routes/plant-care");
const myPlantCreateRouter = require("./routes/plant/myPlantCreate");
const authRouter = require('./routes/auth-routes');
const userPlantsRouter = require("./routes/plant/user-plants")
const wishlistCreateRouter = require("./routes/wishlist/wishlist-create")
const wishlistPlantsRouter = require("./routes/wishlist/wishlist-plants")


app.use("/api/plants", plantsRouter); //upload file setup
app.use("/api/plant-care", plantCareRouter); 
app.use("/api/add", protect, myPlantCreateRouter);
app.use("/api/users", authRouter);
app.use("/api/user-plants", userPlantsRouter)
app.use("/api/user-wishlist", wishlistCreateRouter)
app.use("/api/user-wishlist-plants", wishlistPlantsRouter)


app.use('/api/api', require('./routes/file-upload-routes'))
app.use("/api/", protect, require('./routes/myJungle'));


app.get("*", (req, res, next) => {
  debugger
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/build/index.html");
});


// catch 404 and forward to error handler

// error handler
app.use(function (err, req, res, next) {

  app.use(function (req, res, next) {
    next(createError(404));
  });


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
