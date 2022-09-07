import React from 'react'
import { Link} from 'react-router-dom'
import { useNavigate }from "react-router-dom"
import { Button } from "@mui/material";
import axios from 'axios';
const Book = (props) => {
  const history=useNavigate()
  const {_id,name,author,description , price ,image} =props.book;
  
  const deleteHandler=()=>{
    axios.delete(`http://localhost:5000/books/${_id}`).then( 
      res=>res.data
     ).then( ()=> history('/books')  )
  }
  
  return (
    <div className='card' >
         <img src={image} alt={name}/>
         <article>By {author} </article>
         <h3>{name}</h3>
         <p> {description} </p>
         <h2>{price}₹ </h2>
           <div className="b">

        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }} >Update </Button>
        <Button  onClick={ deleteHandler }  sx={{ mt: "auto" }}  >Delete </Button>
          </div>

    </div>
  )
}

export default Book;