import React from 'react';
import { useFormik } from 'formik';

import { TextField , Button } from '@mui/material';
import loginField from '../fields/LoginField';


//import  { ValidationSchema } from '../Validations/ValidationSchema';
import axios from 'axios';


export default function LoginForm2() {

  const {values ,handleChange ,handleBlur , errors ,touched, handleSubmit} =  
    
    useFormik(
    {
     initialValues : loginField,
     //validationSchema : ValidationSchema,
     
      onSubmit : async(values)=>{   
        let response = await axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate" , values)
          try
          {
            console.log(response.data);
            
            localStorage.setItem("userItem" , JSON.stringify(response.data));  // it is for store the all data in localstorage
           // localStorage.setItem("userItem" , response.data.jwtToken)  // it is store only token in localstorage 
          }
          catch(error)
          {
            console.log(error);
          }
          
            
     
      }                    
  })
  return (
    <div>
       <form onSubmit={handleSubmit} autoComplete='false'>
        <TextField sx={{mb:2}}
          fullWidth
          id="email"
          name="email"
          
          label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />

      <TextField sx={{mb:2}}
          fullWidth
          id="password"
          name="password"
          
          label="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
      />

        <Button 
        color="info" 
        variant="contained" 
        fullWidth type="submit">
          Submit
        </Button>
       </form>
    </div>
  )
}
