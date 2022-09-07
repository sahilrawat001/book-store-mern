import React from 'react'
import { FormLabel,Box, TextField,FormControlLabel,Checkbox , Button} from "@mui/material"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AddBook = () => { 
   const [checked, setchecked] = useState(false);
const history= useNavigate();
 const [inputs, setinputs] = useState( {
   name:"",
   description:"",
   author:"",
   price:"",
   //   available:true,
   image:""
  }
   
)

const sendRequest=async()=>{
   await axios.post( "http://localhost:5000/books",{
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(inputs.available)

    }  ).then( res=>res.data );
}

 const handleChange=(e)=>{
  setinputs( (prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value
   })  )
 }
 const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then( ()=>history('/books') )

 }
 

  return (
    <form onSubmit={handleSubmit } >
      <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700}
      alignContent={'center'}
      alignSelf={'center'}
      marginLeft={"auto"}
      marginRight="auto" >  
       <FormLabel>Name</FormLabel>
    <TextField value={inputs.name} onChange={handleChange}  margin='normal' fullWidth varient="outlined " name='name'/>

       <FormLabel>Author</FormLabel>
    <TextField  value={inputs.author} onChange={handleChange}   margin='normal' fullWidth varient="outlined " name='author'/>

       <FormLabel>Description</FormLabel>
    <TextField   value={inputs.description} onChange={handleChange}  margin='normal' fullWidth varient="outlined " name='description'/>

       <FormLabel>price</FormLabel>
    <TextField  value={inputs.price} onChange={handleChange}  type="number" margin='normal' fullWidth varient="outlined " name='price'/>

       <FormLabel>Image</FormLabel>
    <TextField  value={inputs.image} onChange={handleChange}  margin='normal' fullWidth varient="outlined " name='image'/>
    <FormControlLabel  value={inputs.available} onChange={ ()=>setchecked(!checked)  }  control={<Checkbox checked={checked} />} label="available" />
    
<Button variant="contained" type="submit">Add Book </Button>
      </Box>
    </form>
  )
}

export default AddBook