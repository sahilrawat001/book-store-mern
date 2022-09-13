const express =require('express');
const mongoose=require('mongoose');
const router=require("./Routes/book-route")
const cors=require('cors');
const app=express();

// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
app.use(express.json());
app.use(cors());
app.use( '/books' , router ); 


mongoose.connect(
    "mongodb+srv://sahil:sahilrawat@cluster0.lwte9jn.mongodb.net/mydb?retryWrites=true&w=majority "

).then( ()=>console.log("connected to  db") ).then(
    ()=>{ 
        app.listen(5000);
    }
).catch( (err)=> console.log(err)  ) 
