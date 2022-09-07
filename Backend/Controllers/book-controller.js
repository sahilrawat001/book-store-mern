const Book =require("../Models/Book")

const getAllBooks= async (req,res,next)=>{
    let books;
    try{
        books=await Book.find();
    } catch(err){
        console.log(err);
    }
    if(!books){
        return res.status(404).json({ message:"nothing found" });
    }
    return res.status(200).json({ books});
    
    }  ;

const getbyId=async ( req,res,next)=>{
    const id=req.params.id;
    let book;
    try{

        book=await Book.findById(id);
    }
    catch(err) {
   console.log(err);
    }
    if(!book){
        return res.status(404).json({ message:"nothing found" });
    }
    return res.status(200).json({ book});
}


    const addBook=async( req,res,next)=>{
        const {name,author,description , price ,available,image} =req.body;
        let book;
        try {
         book=new Book( {
            name,
            author,
            description ,
             price ,
             available,
             image
         } );
       await  book.save();
      }
        catch (err) {
         console.log(err);
        }

        if(!book){
            return res.status(404).json({ message:"can't add " });
        }
        return res.status(200).json({ book});
    }

    const updateBook=async( req,res,next)=>{
        const id=req.params.id;
        const {name,author,description , price ,available,image} =req.body;
        let book;
        try {
         book=await Book.findByIdAndUpdate( id, {
            name,
            author,
            description ,
             price ,
             available,
             image
         } );
      book= await  book.save();
  }
        catch (err) {
         console.log(err);
        }

        if(!book){
            return res.status(404).json({ message:"can't update by id" });
        }
        return res.status(200).json({ book});
    }
    const deleteBook=async( req,res,next)=>{
        const id=req.params.id;
         let book;
        try {
         book=await Book.findByIdAndDelete( id );
 }   catch (err) {
         console.log(err);
        }

        if(!book){
            return res.status(404).json({ message:"can't delete" });
        }
        return res.status(200).json({ message:" deleted successfully"});
    }


    exports.getAllBooks=getAllBooks;
    exports.addBook = addBook;
    exports.getbyId  = getbyId ;
    exports.updateBook  = updateBook  ;
    exports.deleteBook  = deleteBook  ;