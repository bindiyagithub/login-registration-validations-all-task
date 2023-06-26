import React from 'react'
import LoginForm from '../components/LoginForm';
import { Container , Typography } from '@mui/material';


export default function Login() {
  return (
    <div className='m-5'>
      <Container maxWidth = 'sm' sx={{textAlign : 'center' , mt:8}}>
     <Typography variant="h3" component="div" sx = {{m:2}} className='text-center text-danger'> 
     Login Form
     </Typography>
      
      <LoginForm/> 
      
      </Container>
      
      
    </div>
  )
}
