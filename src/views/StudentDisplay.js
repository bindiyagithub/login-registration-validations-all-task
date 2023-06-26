import { Margin } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import Button from '@mui/material/Button';

export default function StudentDisplay(props) {
 // console.log(props.mydata);

 const columns = [
   { field : 'id'},
   { field : 'firstname' , headerName : 'First Name' , width:120 ,
            valueFormatter : (params)=>
            {
                 params.value.toLowerCase();
            }
  
   },

   { field : 'lastname' , headerName : 'Last Name' , width:120  },
   { field : 'fullname' , headerName : 'Full Name' , width:170, 
        
        valueGetter: (params)=>{
               return params.row.firstname + ' ' +  params.row.lastname
        }  
               
   },     
      { 
        field: 'address.city' , 
        headerName: 'City' , 
        width: 120 ,
        valueGetter: (params)=>{
             return params.row.address.city
        }
      },
      { 
        field: 'address.state' , 
        headerName: 'State' , 
        width: 90,
        valueGetter : (params)=>{
            return params.row.address.state
        }
      },

      { 
        field: 'delete' , 
        headerName: 'Delete' , 
        width: 90,
        renderCell : (params) =>{
            return (<Button  variant="outlined" onClick={()=>{ 
 
                 props.delete(params.row.id);

             }}>Delete</Button>)
        }
        
      },

      { 
        field: 'edit' , 
        headerName: 'Edit' , 
        width: 90,
        renderCell : (params) =>{
            return (<Button variant="outlined" onClick={()=>
            { 
              props.edt(params.row.id);
            } }>Edit</Button>)
        }
        
      },
 ]
  
  return (
    <div style={{ height: 400, width: '90%'}} className='ms-5'>
      <DataGrid 
          rows ={props.data}
          columns = {columns}
          pageSize = {5}
          rowsPerPageOptions ={[5]}
          checkboxSelection>
            
      </DataGrid>
       
    </div>
  )
}
