

const express=require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const app=express();
const path = require('path');

app.use(cors());
app.use(express.json());

// Connect to the db

mongoose.connect('mongodb://localhost:27017/Article', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection=mongoose.connection;
connection.once('open',()=>{
  console.log("Mongo db is seccessfully");
})

//End 


const articleRouter=require('./Article.routes');
app.use('/articles',articleRouter);




app.listen(8000,()=>{
    console.log("server is ready");
})