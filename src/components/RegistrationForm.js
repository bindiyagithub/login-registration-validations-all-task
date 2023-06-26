import { useFormik } from 'formik'
import React from 'react'
import RegistrationField from '../fields/RegistrationField';
import
{
  TextField, FormControl, Button, Checkbox, InputLabel, Select,
  MenuItem, FormControlLabel, FormHelperText
} from '@mui/material';


import { ValidationSchema } from '../Validations/ValidationSchema';
import { useNavigate } from 'react-router-dom';


export default function RegistrationForm()
{

   const myTitle = ['Mr', 'Mrs', 'Miss', 'Ms'];

  const navigate =  useNavigate();

  const { values, handleChange,  errors, touched, handleSubmit } =

    useFormik(
    {
      initialValues: RegistrationField,

      validationSchema: ValidationSchema,

      onSubmit: ( values ) =>
      {
          
              console.log( values );
              navigate('/Login')
          //alert( JSON.stringify( values, null, 2 ) )
      }
    }
    )



  return (
       
      <form onSubmit={handleSubmit} autoComplete='false'>

        <FormControl fullWidth sx={{ minWidth: 100  }} variant="outlined"
          error={errors.title && touched.title}>

          <InputLabel id="demo-simple-select-helper-label">Title</InputLabel>
          <Select
          
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={values.title}
            label="Title"
            name="title"
            onChange={handleChange}
            

          >
            {
              myTitle.map( ( title ) =>
              {
                return ( <MenuItem key={title} value={title}> {title} </MenuItem> );
              } )
            }
          </Select>

          {errors.title && touched.title && <span style={{ color: "#dc3545" }}>
            {errors.title} </span>}
        </FormControl>
        
        <TextField sx={{ mt: 2  }}
          fullWidth
          id="firstName"

          name="firstName"
          label="FirstName"
          value={values.firstName}
          onChange={handleChange}
          
          error={touched.firstName && Boolean( errors.firstName )}
          helperText={touched.firstName && errors.firstName}

        /> 
        <TextField sx={{ mt: 2 }}
          fullWidth
          id="lastName"

          name="lastName"
          label="LastName"
          value={values.lastName}
          onChange={handleChange}
          
          error={touched.lastName && Boolean( errors.lastName )}
          helperText={touched.lastName && errors.lastName}

        />
        <TextField sx={{ mt: 2  }}
          fullWidth
          id="email"

          name="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          
          error={touched.email && Boolean( errors.email )}
          helperText={touched.email && errors.email}

        /> 

        <TextField sx={{ mt: 2  }}
          fullWidth
          id="password"

          name="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          
          error={touched.password && Boolean( errors.password )}
          helperText={touched.password && errors.password}

        /> 

        <TextField sx={{ mt: 2  }}
          fullWidth
          id="confirmPassword"

          name="confirmPassword"
          label="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          
          error={touched.confirmPassword && Boolean( errors.confirmPassword )}
          helperText={touched.confirmPassword && errors.confirmPassword}

        /> 
        <FormControl>
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

              

        <Button type="submit" color="primary" variant="contained" fullWidth >
          Submit
        </Button>



      </form>
      
    
  )
}
