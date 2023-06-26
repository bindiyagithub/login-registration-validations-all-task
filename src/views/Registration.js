import React from 'react'
import { Container } from '@mui/material';

import RegistrationForm from '../components/RegistrationForm';

export default function Registration() {
  return (
    <div className='m-5'>
      <Container maxWidth = 'sm' sx={{textAlign : 'center' , mt:8}}>
      <h2 className='text-center text-primary mt-3'>Registration Form</h2>
      
      <RegistrationForm/> 
      
      </Container>
       
       
      
    </div>
  )
}
