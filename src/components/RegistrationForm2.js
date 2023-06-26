import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import RegistrationField from '../fields/RegistrationField';
import { TextField  ,FormControl , Button ,Checkbox , InputLabel, Select , 
  MenuItem, FormControlLabel ,FormHelperText} from '@mui/material';


import  { ValidationSchema } from '../Validations/ValidationSchema';

export default function RegistrationForm2() {

  const myTitle = ['Mr' , 'Mrs' , 'Miss' , 'Ms'];  // it is for title
   const navi =   useNavigate();
   

   const {values ,handleChange  ,handleBlur , errors ,touched, handleSubmit} =
    useFormik({
      
      initialValues : RegistrationField,
     validationSchema : ValidationSchema,

      onSubmit : async(values)=>{

        try
        {
          let d = await axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/register" , values)
          
          console.log(d.data);
         //alert(JSON.stringify(values, null, 2));

          if(d.status == 200)
          {
            navi('/Login2')
          }
        }

        catch(error)
        {
          console.log(error);
        }
         
      }
    
    });
          
          

  return (
     
      <form onSubmit={handleSubmit} autoComplete='false'>

      <FormControl fullWidth margin = 'dense' variant = 'filled' 
      error={errors.title && touched.title}>

        <InputLabel id="title">Title</InputLabel>
        <Select
            
           value={values.title}
           name = "title"
           size="small"
           labelId='title'
           id="title" 
           onChange={handleChange} 
           onBlur={handleBlur}
            
        >

          {
            myTitle.map((title)=>{
                  return(<MenuItem key={title} value={title}> {title} </MenuItem>);
            })
          }
          
          

          {/* <MenuItem value="mr">Mr</MenuItem>
          <MenuItem value="mrs">Mrs</MenuItem>
          <MenuItem value="miss">Miss</MenuItem>
          <MenuItem value="ms">Ms</MenuItem> */}

        </Select>
        {errors.title && touched.title && <span style={{color: "#dc3545"}}>{errors.title}</span>}
      </FormControl>

     <TextField 
          fullWidth
          id="firstName"
          margin="dense"
          name="firstName"
          size="small"
          label="FirstName"
          variant = 'filled'
          value={values.firstName}
          onChange={handleChange}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={touched.firstName && errors.firstName}
          
     />

      <TextField
          fullWidth
          id="lastName"
          margin="dense"
          name="lastName"
          label="LastName"
          variant = 'filled'
          value={values.lastName}
          onChange={handleChange}
           error={touched.lastName && Boolean(errors.lastName)}
           helperText={touched.lastName && errors.lastName}
          
     />
      <TextField
          fullWidth
          id="email"
          margin="dense"
          name="email"
          label="Email"
          variant = 'filled'
          value={values.email}
          onChange={handleChange}
           error={touched.email && Boolean(errors.email)}
           helperText={touched.email && errors.email}
          
     />

        <TextField
          fullWidth
          id="password"
          margin="dense"
          name="password"
          label="password"
          variant = 'filled'
          value={values.password}
          onChange={handleChange}
           error={touched.password && Boolean(errors.password)}
           helperText={touched.password && errors.password}
          
        />

        <TextField
          fullWidth
          id="confirmPassword"
          margin="dense"
          name="confirmPassword"
          label="confirmPassword"
          variant = 'filled'
          value={values.confirmPassword}
          onChange={handleChange}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
           helperText={touched.confirmPassword&& errors.confirmPassword}
          
        />

      <FormControl variant = 'filled'>
      <FormControlLabel
        control={
          <Checkbox
            name="acceptTerms"
            checked={values.acceptTerms}
            onChange={handleChange}
            color="primary"
          />
        }
        label="Accept terms and conditions"
      />
      <FormHelperText style={{ color: "#dc3545" }}>
       {touched.acceptTerms && errors.acceptTerms
        ? touched.acceptTerms && errors.acceptTerms
        : " "}
      </FormHelperText>
    </FormControl>



      <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
      </Button>
         </form>
     
    
  )
}
        
     

