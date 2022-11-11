// import { Modal } from '@mui/material'
import './index.css'

import * as React from 'react';
import { useState } from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
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

export default function CustomizedDialogs() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="standard" onClick={handleClickOpen}>
      {plus}
      </Button>
      <BootstrapDialog PaperProps={{sx: { width: "390px", borderRadius: '10px'}}} fullWidth onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} TransitionComponent={Transition}
        keepMounted >
        <BootstrapDialogTitle sx={{color: 'black'}} id="customized-dialog-title" onClose={handleClose}>
            Attach a Repository
        </BootstrapDialogTitle>
        <DialogContent dividers className='modal-input'>
        <TextField
        //   id="filled-select-currency"
          select
          sx={{ m: 1.5 }}
          label="Attach repositories"
          required
          helperText="Please select your repositories"
          variant="filled"
        >
        </TextField>
        </DialogContent>
        <DialogActions sx={{display: 'flex', justifyContent: 'center'}}>
        <Button sx={{backgroundColor: '#A97FFF', color: 'white', ':hover': {
      bgcolor: '#8A69CE'},fontWeight: 'bold', borderRadius: '10px', margin: '16px 0px', width: '95%'}} autoFocus >
            Attach
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
