import React from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography  } from '@mui/material'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useState } from 'react';
import { NavLink} from 'react-router-dom'
const Header = () => {
  const [first, setfirst] = useState(0);
  return (
    <div> 
   <AppBar sx={{backgroundColor:'#263F6D ' }} position="sticky" >
    <Toolbar>
    <NavLink to="/" style={{ color: "white" }}>
  <Typography  oncl > <AutoStoriesIcon/>  </Typography>
  </NavLink>
  <Tabs sx={{ ml: "auto"  }}
   textColor= "inherit"  indicatorColor="secondary"
    value={first}  onChange={ (e,val)=>setfirst(val) } >
    <Tab LinkComponent={ NavLink  } to="/add" label= "Add Books "   />
    <Tab LinkComponent={ NavLink  } to="/books  " label= "Books "   />
    <Tab LinkComponent={ NavLink  } to="/about  " label= "About "/>
  </Tabs>
    </Toolbar>
   </AppBar>
    </div>
  )
}

export default Header