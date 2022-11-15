import './index.css'

import * as React from 'react';
import { useState } from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const plus = <FontAwesomeIcon icon = {faPlus} />


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const buttonTheme = createTheme({
    palette: {
      cancel: {
        main: '#9A9A9A',
        secondary: '#787878'
      },
      delete: {
        main: '#EE4B2B',
        secondary: '#AF341C'
      },
      title: {
        main: '#010001',
      }
    },
    shape: {
        borderRadius: 12,
      }, 
  });

export function EditModal({id}) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");



  const handleClickOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const handleTitleChange = (e) => {
     setNewTitle(e.target.value)
     console.log(newTitle)
  }

  //stop modal onclick from propagating new event 
  const stopProp =(e) => {
    e.stopPropagation()

  }
    // PATCH method to edit workspace title 

    const editWorkspace = async (e) => {
        // Format the request data
        const data = {
          wsName: newTitle,
          id: id
        }
        console.log(id)
    
        // Set the request metadata
        const options = {
          method: "PATCH",
          credentials: 'include',
          headers: {
              "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        };
    
        // Send the patch request
        const response = await fetch(`http://localhost:3000/workspace/${id}`, options);
        const workspace = await response.json();
        console.log(workspace)
        return workspace;
      } 

      const handleSubmit = async () => {
        await editWorkspace();
        setOpen(false);
        window.location.reload()

      }
    


  return (
    <ThemeProvider theme={buttonTheme}>
        <div>
        <Button sx={{color: '#A020F0', paddingLeft: '10px'}} variant="standard" onClick={handleClickOpen}>
        Edit
        </Button>
        <BootstrapDialog onClick={stopProp} PaperProps={{sx: { width: "350px"}}} fullWidth onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} TransitionComponent={Transition}
            keepMounted >

            <DialogTitle sx={{color: 'title.main', paddingBottom: '5px'}} className='delete-modal-text'>Edit Workspace Name:</DialogTitle>

            <DialogContentText className='delete-modal-text'>
            <TextField onChange={handleTitleChange} onClick={stopProp} sx={{ m: 1.5, width: '95%' }} required id="workspace-name" label="Workspace Name" variant="outlined" />
             </DialogContentText>

            <DialogActions sx={{display: 'flex', justifyContent: 'center', margin: '16px 5px'}}>
                    <Button onClick={handleClose} sx={{backgroundColor: 'cancel.main', fontWeight: 'bold', ':hover': {
                        bgcolor: 'cancel.secondary', // theme.palette.primary.main
                        color: 'white'},}} variant="contained">
                    Cancel
                    </Button>
                    <Button onClick={handleSubmit} sx={{backgroundColor: 'delete.main', fontWeight: 'bold', ':hover': {
                      bgcolor: 'delete.secondary', // theme.palette.primary.main
                      color: 'white',
                      },}} variant="contained">
                    Update
                    </Button>
            </DialogActions>
        </BootstrapDialog>
        </div>
    </ThemeProvider>
  );
}
