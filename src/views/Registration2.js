import React from 'react';
//import Typography from '@mui/material/Typography';
import RegistrationForm2 from '../components/RegistrationForm2';

import { Container , Typography } from '@mui/material';

export default function Registration2() {
  return (
    <div className='m-5'>

      <Container maxWidth = 'sm' sx={{textAlign : 'center' , mt:8}}>
        <Typography variant="h3" component="div" sx = {{m:2}} 
          className='text-center text-danger'> 
          Registration Form
        </Typography>
      
      <RegistrationForm2/> 
      
      </Container>
       
      
      
    </div>
  )
}
