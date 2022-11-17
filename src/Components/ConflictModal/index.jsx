// import { Modal } from '@mui/material'
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
import DialogContentText from '@mui/material/DialogContentText';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Slide from '@mui/material/Slide';
import { FormControl, InputLabel} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setWs } from '../../store/workspaces';


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

export function ConflictModal({open, setOpen}) {
//   const [open, setOpen] = useState(false);


  const handleClose = (e) => {
    e.stopPropagation()
    setOpen(false);
  };

  const stopProp =(e) => {
    e.stopPropagation()

  }
  const xIcon = <FontAwesomeIcon icon ={faXmark} />

  return (
    <div>
      <BootstrapDialog onClick={stopProp} PaperProps={{sx: { width: "390px", borderRadius: '10px'}}} fullWidth onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} TransitionComponent={Transition}
        keepMounted >
        <BootstrapDialogTitle sx={{color: 'black'}} id="customized-dialog-title" dividers onClose={handleClose}>
          Warning
        </BootstrapDialogTitle>
        <DialogContent sx={{display: 'flex', alignItems: 'center'}} dividers className='modal-input'>
        <DialogContentText className='delete-modal-text'>
                There is a collaborator already working on this file 
            </DialogContentText>

        </DialogContent>
        <DialogActions sx={{display: 'flex', justifyContent: 'center'}}>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
