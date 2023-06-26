import React from 'react';
import { useFormik } from 'formik';
import { TextField , Button } from '@mui/material';
import loginField from '../fields/LoginField';
import * as Yup from 'yup';
 

//import  { ValidationSchema } from '../Validations/ValidationSchema';


export default function LoginForm() {

  const {values ,handleChange , errors ,touched, handleSubmit} =  
    
    useFormik(
    {
     initialValues : loginField,
     
     validationSchema : Yup.object({
      email : Yup.string()
              .email('Invalid Email')
              .required(),
      password : Yup.string()
                 .required('Password Must be Required')
                 .min(6, 'Password must be at least 6 characters')
                 .matches(/^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,30}$/ ,'Enter Strong Password')
     }),
     
     
        onSubmit : (values)=>
         {   
            console.log(values);
         }                    
  })
  
  return (
    <div>
       <form onSubmit={handleSubmit} autoComplete='false'>
        <TextField
          fullWidth
          id="email"
          name="email"
          margin="dense"
          label="Email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />

      <TextField
          fullWidth
          id="password"
          name="password"
          margin="dense"
          label="Password"
          value={values.password}
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
      />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
       </form>
    </div>
  )
}
