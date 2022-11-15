import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';

const Breadcrumb = (props) => {
    
    // const location = useLocation();
    // const navigate = useNavigate();
    // const match = useMatch("write-the-url-you-want-to-match-here");

    // const { to, pathname } = props; 

    // const pathnames = pathname.split('/')

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="">Username</Link>
        <Link underline="hover" color="inherit" to="">Workspace</Link>
        <Typography color="text.primary" to="">Repository</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;

