var express         = require("express"),
    app             = express(),
    http            = require('http'),
    path            = require('path'),
    bodyParser      = require('body-parser'),
    flash           = require('connect-flash'),
    csrf            = require("csurf");  // to avoid your session from being stolen
    mongoose        = require('mongoose'),
    session         = require('express-session'),
    passport        = require("passport"),  // login and SignUp authentication
    LocalStrategy   = require("passport-local"),     // login and SignUp authentication
    cookieParser    = require("cookie-parser"),
    methodOverride  = require("method-override"),
    logger          = require('morgan'),
    validator       = require("express-validator"),
    MongoStore      = require("connect-mongo")(session),
    seedDB          = require("./seed/seed"),
    User            = require("./models/user");    // user model

//cofigure dotenv
var dotenv = require('dotenv').config({path: path.join(__dirname, '.env')}); // for env variables

//router setup
var indexRoutes = require('./routes/index');
var foodRoutes = require('./routes/foods');
// var usersRouter = require('./routes/users');

//setup db
// mongoose.set("useCreateIndex", true);
// mongoose.connect('mongodb://localhost:27017/projectdb', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://phuong:abc12345@pizzaweb-qm26h.mongodb.net/test', { useNewUrlParser: true });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use ( bodyParser.json());
app.use(validator());

app.use(express.static(__dirname + '/public'));
app.use(flash());
app.use(methodOverride("_method"));     // for authentication
app.use(cookieParser('secret'));        // for authentication
seedDB();

//  PASSPORT CONFIGURATION
app.use(session({
    secret: "One again Rusty wins the cutest dog!",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({  mongooseConnection: mongoose.connection }),  //to store session using Mongo Store
    cookie: {maxAge: 180 * 60 * 1000}  // configuring how long the session should live before they expire. (using 180 mins)
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// making a middleware for all routes on the page to get current user, error or success
// this are global variables(can be accessed from any file)
app.use(async function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error =  req.flash("error");
    res.locals.success =  req.flash("success");
    res.locals.session = req.session;
    next();
});

//csrf
app.use(csrf());
app.use(function (req, res, next) {
    var csrfToken = req.csrfToken();
    res.cookie('XSRF-TOKEN', csrfToken);
    res.locals.csrfToken = csrfToken;
    next();
});

//router config
app.use('/', indexRoutes);
app.use("/foods",foodRoutes);
// app.use('/users', usersRouter);

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Sever started.......");
});


module.exports = app;