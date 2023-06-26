import React, { useState } from 'react';
import StudentForm from '../components/StudentForm';
import Button  from '@mui/material/Button';
import StudentDisplay from './StudentDisplay';


export default function Student() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {   // this method used for popup open
    setOpen(true);
  };

  const handleClose = () => {  // this method used for popup close
     setOpen(false);
  };

  

  const [data , setData] = useState([]);   // useState for add data in form

  const [edit , setEdit]  = useState(-1);   // useState for adit data in form


  const handleDelete = (id)=>{   /* yaha id per se delete  kiya
                                            hai so filter use kiya, jub 
                                            index per se karte hai tub 
                                            splice ka use karte hai */
    let my = [...data].filter(y =>                     
    {
         return y.id != id
    })
    setData(my);
}


const handleEdit = (id)=>{
        setEdit(id);
        setOpen(true);  /* yaha jub edit btn click karne se handleEdit
                          fun call hoga tub data edit karne ke liye popup open hona chahiye
                           so setOpen true liya  */
}

  return (
    <div className='mt-2'>

       
       <Button variant="outlined" onClick={handleClickOpen} 
          className='my-3 ms-5'>
        Open form dialog
       </Button>
       
       <StudentForm handleClose = {handleClose} open={open} 
                       data ={data}    setData ={setData}  
       editID = {edit} setEdit = {setEdit} />

         <StudentDisplay data = {data}  delete = {handleDelete} 
         edt = {handleEdit}/>

    </div>
  )
}
