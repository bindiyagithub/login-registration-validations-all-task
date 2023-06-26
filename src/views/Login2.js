import React from 'react';

import LoginForm2 from '../components/LoginForm2';

import { Container , Typography } from '@mui/material';


export default function Login2() {
  return (
    <div className='m-5'>

     <Container maxWidth = 'sm' sx={{textAlign : 'center' , mt:8}}>
     <Typography variant="h3" component="div" sx = {{m:2}} className='text-center text-danger'> Login Form
     </Typography>
      
      <LoginForm2/> 
      
      </Container>
     
      
    </div>
  )
}
