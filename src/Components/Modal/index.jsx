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
import { FormControl, InputLabel} from '@mui/material';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


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
    setSelected('');
  };

  const repos = [
    {
      name: "repo1",
      id: 1
    },
    {
      name: "repo2",
      id: 2
    }
  ]

  const [repositories, setRepositories] = useState(repos);
  const [selected, setSelected] = useState('')

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <Button variant="standard" onClick={handleClickOpen}>
      {plus}
      </Button>
      <BootstrapDialog PaperProps={{sx: { width: "390px", borderRadius: '10px'}}} fullWidth onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} TransitionComponent={Transition}
        keepMounted >
        <BootstrapDialogTitle sx={{color: 'black'}} id="customized-dialog-title" onClose={handleClose}>
          Create a Workspace 
        </BootstrapDialogTitle>
        <DialogContent sx={{display: 'flex', alignItems: 'center'}} dividers className='modal-input'>
        <TextField sx={{ m: 1.5, width: '95%' }}  dividers required id="workspace-name" label="Workspace Name" variant="outlined" />

      <FormControl fullWidth sx={{display: 'flex', justifyContent: 'center', width: '95%'}}>
        <InputLabel id="demo-simple-select-label">Attach repositories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="Attach repositories"
          onChange={handleChange}
        >

          {repositories.map(function (repo, i) {
            return (
              <MenuItem key={repo.id} value={repo.name}>{repo.name}</MenuItem> 
            )
          })}
        </Select>
      </FormControl>

        </DialogContent>
        <DialogActions sx={{display: 'flex', justifyContent: 'center'}}>
          <Button sx={{backgroundColor: '#A97FFF', color: 'white', ':hover': {
      bgcolor: '#8A69CE'},fontWeight: 'bold', borderRadius: '10px', margin: '16px 0px', width: '95%'}} autoFocus >
            Create
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
