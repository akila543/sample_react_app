'use strict'
const http = require('http')
    , express = require('express')
    , app = express()
    , server = http.createServer(app)
    , path = require('path')
    , assert = require('assert')
    , PORT = process.env.PORT || 9096 ;
//routes
 //mongoose.connect('mongodb://localhost/loginapp');
//var db = mongoose.connection;


app.use(function(req, res, next) {
 	res.header("Access-Control-Allow-Origin", "*");
 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	next();
 	});

app.use(express.static('./../'));

app.use('/',(req,res,next)=>{
  console.log('inside sample app routes');
  next();

});



//App server ---------->
module.exports = server.listen(PORT, err => {
  if(err){
    throw err
  }
  console.log('sample app running on 9096')
})
