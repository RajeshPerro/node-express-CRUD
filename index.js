const express = require('express');
const path = require ('path');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');

//setup url and connecting mongodb..
const mongoDB = 'mongodb://localhost:27017/nodeproject';
//mongoose.connect(mongoDB);
mongoose.connect(mongoDB,  (err, client) =>{
  if (err) throw err

  mongoose.Promise = global.Promise; // Get Mongoose to use the global promise library : so we can use mongoose globably
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
})


//created the app varible so we can use express framework throughtout the project
const app = express();
//port we want to run
const port = 9999;

//configure the app...
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
  extended: true
}));


// import routes
const index = require('./routes/index')
const api = require('./routes/api')

// set routes
app.use('/', index)
app.use('/api', api)


app.listen(port, () => console.log(`Server Started on port ${port}!`))
