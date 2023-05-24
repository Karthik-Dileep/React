import React from "react";
import{Box, Button,TextField,Typography} from '@mui/material';
const First=()=>{
    
    return(
        <div>
            <Typography variant="h2">WEBPAGE-1</Typography>
            <br></br>
            <TextField id="outlined-basic" label="Type Your Name" variant="outlined" />
            <br></br>
            <br></br>
            <TextField id="outlined-basic" label="Type Your Password" variant="outlined" />   
            <br></br>
            <br></br>
            <Button variant="contained">Click Here</Button>
        </div>
    )
}
export default First;

      
