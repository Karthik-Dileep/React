import { Button,Typography } from '@mui/material'
import React, { useState } from 'react'
const ThreeButtons = () => {
  var [pname,setpname]=useState("")
  const Home=()=>{
    setpname("Welcome to Home")
  }
  const Gallery = () => {
    setpname("Welcome To Gallery")
  }
  const Website = () => {
    setpname("Welcome To Website")
  }
  return (
    <div>
      <Typography variant='h2'>{pname}</Typography>
     <br>
     </br>
     <br>
     </br>
      <Button variant= "contained" color='success' onClick={Home}>Click Here To Go to Home</Button>
      <Button variant= "contained" color="primary" onClick={Gallery}>Click Here To Go to Gallery</Button>
      <Button variant= "contained" color="error" onClick = {Website} >Click Here To Go to Website</Button>
    </div>
  )
}
export default ThreeButtons 
