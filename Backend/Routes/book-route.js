const express =require('express');
 const  booksController  = require('../Controllers/book-controller');
const router=express.Router();
 

router.get("/", booksController.getAllBooks );

//create
router.post("/", booksController.addBook );  

//read
router.get("/:id", booksController.getbyId   );

//update
router.put("/:id", booksController.updateBook   );


//delete operation
router.delete("/:id", booksController.deleteBook );  
  

module.exports =router;
 
 