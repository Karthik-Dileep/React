import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
const Table1 =() =>{
    var [names,age]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3030/see").then((response)=>{
            age(response.data)
            console.log(response.data);
        }).catch()
    },[])
  return (
    <div>
        <TableContainer style={{paddingLeft:200}}>
            <Table>
                <TableHead>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <TableRow>
                        <TableCell>Name</TableCell> 
                        <TableCell>Grade</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((value,index)=> {
                        return(
                        <TableRow>
                            <TableCell>{value.Name}</TableCell>
                            <TableCell>{value.Grade}</TableCell>
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}
export default Table1