import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar >
                <Typography sx={{flexGrow:1}} color= {'black'} >Have a Nice Day</Typography>
                <Button variant = "contained" color="secondary">LOGIN</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}
export default Navbar