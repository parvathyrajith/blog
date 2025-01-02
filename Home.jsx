import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
    

const Home = () => {
    var[user,setuser]=useState([])
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) =>{
        console.log(response.data)
        setuser(response.data)
    })
   
  return (
    <div>
<TableContainer component={Paper}>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>TItle</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {user.map((val) => {
                return (
                    <TableRow>
                         <TableCell>{val.id}</TableCell>
                         <TableCell>{val.title}</TableCell>
                    </TableRow>
                )
            }
        )}
                    </TableBody>
                    </Table>
                    </TableContainer>
    </div>
  )
}


export default Home