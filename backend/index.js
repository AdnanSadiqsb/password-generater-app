
var express = require('express');
const mongoose= require('mongoose')
const Password=require('./Models/PasswordModel')

const cors=require('cors')
var bodyParser = require('body-parser')
var app = express();
const path = require('path');
app.use(cors({origin: '*'}))
app.use(express.json());
const hbs = require('hbs')
app.set('view engine', 'hbs')
const connectToDatabase=()=>{

    var conString ="mongodb://127.0.0.1:27017/password_generator"

    // var conString ="mongodb+srv://adnanSadiq:fa19bse036@mattress.p2zymyx.mongodb.net/dpportal"
    mongoose.connect(conString,{ useNewUrlParser: true, useUnifiedTopology: true }).then((data)=>{
        console.log(`mongo db is connected with server ${data.connection.host}`)
    
    }).catch((error)=>{
        console.log("mongo db is not connected with server")
    })
}

connectToDatabase()
app.get('/', function (req, res) {
//   res.status(200).send('Welcome to GYM');
  res.json({message:'server is running'});
});
// app.use(express.static(path.join(__dirname, 'frontend')));
app.post('/add/password',async function (req, res) {
    try{
       
            const password=await Password.create(req.body)            
            res.status(200).json({
                success:true,
                message:"Add password Successfuly",
                password
            })
       
    }
    catch(error){
        console.log(error);
        res.status(200).json({
            success:false,
            message:"password not added"
        })
    }
  });



  app.get('/passwords/:type',async function (req, res) {
    try{
        console.log(req.params.type);
        const passwords=await Password.find({type:req.params.type}) .sort({createdAt: 1}) 
        res.status(200).json({
            success:true,
            message:"get all passwords Successfuly",
            passwords
        })
    }
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:"error accur"
        })
    }
  });
  var port = process.env.PORT || 4000;

var server = app.listen(port, function() {
  console.log('Express server listening on port http://localhost:'+port);
});