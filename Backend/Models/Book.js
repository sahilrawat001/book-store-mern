const mongoose=require('mongoose');
const Schema =mongoose.Schema;

const BookSchema=new Schema(
{
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    } ,
    price :{
        type:String,
        required:true
    } ,
    available :{
        type:Boolean,
        required:true
    },
    image:{
        type:String,
        required:true
    },
});
module.exports=mongoose.model("Book",BookSchema);