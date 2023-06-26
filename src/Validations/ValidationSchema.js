
import * as  Yup from 'yup';
 

 export const ValidationSchema = Yup.object({
   
  
    title : Yup.string().required().oneOf(['Mr' , 'Mrs' , 'Miss' , 'Ms']),
    
    firstName :Yup.string().min(3).max(10).required('F_Name is Required'),
    
    lastName :Yup.string().min(3).max(10).required('L_Name is Required'),  

    email : Yup.string().email('Invalid Email').required(),
    
    //age : Yup.number().min(10).max(50).required('Age Must Be Required'),
    
    password : Yup.string().required('Password Must be Required')
    .matches(/^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,30}$/ ,'Enter Strong Password'),

    confirmPassword : Yup.string().required('Confirm Password must be required')
    .oneOf([Yup.ref('password') , null] , 'Password & Confirm Password Does not Match!'),
    
   // acceptTerms : Yup.boolean.required('You must accept the Terms of Service to proceed')
   acceptTerms : Yup.boolean().oneOf([true], 'Please check the checkbox')
   
});