// import { Modal } from '@mui/material'
import './index.css'

import * as React from 'react';
import { useState, useEffect } from 'react'
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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';




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

export default function CustomizedDialogs({repos, setRepos}) {
  const navigate = useNavigate()
  const {wsid, workspace} = useParams();
  // console.log(params)
  const [open, setOpen] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [selected, setSelected] = useState([]);
  
console.log(repos)


  
  // console.log(setRepos)

  const handleChange = (event) => {
    // setSelected(event.target.value);
    const {
      target: { value },
    } = event;
    setSelected(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log('selected',selected)
  };

  const handleClickOpen = () => {
    setOpen(true);
    getRepos()
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  // get repos 
  async function getRepos() {
    const options = {
      credentials: 'include'
    }
    const response = await fetch('http://localhost:3000/repo/user', options);
    const repos = await response.json()
    setRepositories(repos);
    console.log(repos);
  }

  const handleSubmit = async () => {
    await addRepository();
    setOpen(false);
  }

  const getAllRepos = async () => {
    const options = {
      credentials: 'include'
    }
    const response = await fetch(`http://localhost:3000/repo/workspace?wsid=${wsid}`, options);
    const data = response.status === 200 ? await response.json() : [];
    setRepos(data);
  }

  const addRepository = async () => {

    let res;
    for (const repo of selected) {
      // Format the request data
      const data = {
        repoName: repo,
        wsId: wsid
      }
      console.log(data)

      // Set the request metadata
      const options = {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      };
        console.log(options)
      // Send the post request
      res = await fetch('http://localhost:3000/repo', options);
    }

    res.status == 200 ? getAllRepos() : '';
  }

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

          <FormControl 
            // action=
            fullWidth sx={{display: 'flex', justifyContent: 'center', width: '95%'}}>
            <InputLabel id="demo-simple-select-label">Attach repositories</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                multiple
                value={selected}
                label="Attach repositories"
                helperText="Please select repositories to attach"
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
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
        <Button onClick={handleSubmit} sx={{backgroundColor: '#A97FFF', color: 'white', ':hover': {
      bgcolor: '#8A69CE'},fontWeight: 'bold', borderRadius: '10px', margin: '16px 0px', width: '95%'}} autoFocus >
            Attach
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
