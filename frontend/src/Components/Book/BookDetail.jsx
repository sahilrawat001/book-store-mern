import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { FormLabel,Box, TextField,FormControlLabel,Checkbox , Button} from "@mui/material"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 

 const BookDetail = () => {
  const [inputs, setInputs] = useState( {} );
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();

 useEffect(()=>{ 
  const fetchHandler =async()=>{
    await axios.get(`http://localhost:5000/books/${id}`).then(
  (res)=>res.data).then(data=>setInputs(data.book ))
    
  };
  fetchHandler().then( (data)=> setInputs(data.book));
 },[ id]  )


 //form 
 const sendRequest = async () => {
  await axios
    .put(`http://localhost:5000/books/${id}`, {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked),
    })
    .then((res) => res.data);
};
const handleSubmit = (e) => {
  e.preventDefault();
  sendRequest().then(() => history("/books"));
};
const handleChange = (e) => {
  setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
};



  return (
    <div>   
    {inputs && (  <form onSubmit={handleSubmit } >
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
    <FormControlLabel  value={inputs.available} onChange={ ()=> setChecked(!checked)  }  control={<Checkbox checked={checked} />} label="available" />
    
<Button variant="contained" type="submit"> Update Book </Button>
      </Box>
    </form>
    )}
       </div>
  )
}

export default BookDetail