import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function StudentForm(props) {
    
  /*  here we design the form using grid in this component */
          const [form , setForm] = useState({

               firstname : "",
                lastname : "",
                address :  {
                    city : "",
                    state : ""
                }

          })

          // for edit functionality
        useEffect(()=>
        {
           if(props.editID > 0 )
           {
              let t = props.data.find((value)=>{
                     return value.id == props.editID
              })

              setForm(t);
           }

           else
           {
              setForm({
                  firstname : "",
                  lastname : "",
                  address :  {
                    city : "",
                    state : ""
                  }
              })
           }
        } ,[props.editID]) /* yaha props.editID dependencies li hai , 
                           kyuki jub bhi id change hota hai tub again humko 
                           adit karna hota hai. so...  */


          const changeHandler = (e)=>{

            if(e.target.name.includes('.'))
            {
              let d = {...form , [e.target.name.split('.')[0]] : 
                  {...form[e.target.name.split(".")[0]] , 
                    [e.target.name.split('.')[1] ] : e.target.value}
              };
              setForm(d);
            }
            else{
              let d = {...form , [e.target.name] : e.target.value};
              setForm(d);
            }
                
          }

          const handleSave = ()=>{
               console.log(form);

               let t = [...props.data];
                    // it is only for add the value in form
              /* t.push( {...form , id: t.length + 1} );
               props.setData(t);
               props.handleClose();  */

                   // it is for adit as well as add the data in form 

                   if(props.editID > 0)
                   {
                       t = t.map((value)=>{
                            if(value.id == props.editID)
                            {
                                 return form;
                            }
                            else
                            {
                                  return value;
                            }
                       })
                   }
                   else
                   {
                       t.push({...form , id: t.length + 1})
                   }

                   props.setEdit(-1);
                   props.setData(t);
                   props.handleClose();


          }

          
  return (
    
    <div>
     <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your firstname , lastname &  city , state here. We
            will send updates occasionally.
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            id="firstname"
            name="firstname"
            value={form.firstname}
            label="Firstname"
            type="text"
            fullWidth
            variant="standard"
            onChange={changeHandler}
          />

<TextField
            autoFocus
            margin="dense"
            id="lastname"
            name="lastname"
            value={form.lastname}
            label="Lastname"
            type="text"
            fullWidth
            variant="standard"
            onChange={changeHandler}
          />

<TextField
            autoFocus
            margin="dense"
            id="address.city"
            label="City"
            type="text"
            name='address.city'
            value={form.address.city}
            fullWidth
            variant="standard"
            onChange={changeHandler}
          />

<TextField
            autoFocus
            margin="dense"
            id="address.state"
            name="address.state"
            value={form.address.state}
            label="State"
            type="text"
            fullWidth
            variant="standard"
            onChange={changeHandler}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={props.handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
