import { Box, Backdrop, Typography, Grid } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const [open] = useState(true);
  return (
    <>
      <Backdrop
        open={open}
        sx={{
          minHeight: '100vh',
          backgroundColor: '#dcdcdc',
          zIndex: '2000',
        }}
      >
        <Grid>
          <Typography>Something went wrong .</Typography>
          <Typography>404</Typography>
          <Box sx={{ mt: '4rem', display: 'flex', justifyContent: 'center' }}>
            <NavLink to={'/'}>Home</NavLink>
          </Box>
        </Grid>
      </Backdrop>
    </>
  );
};

export default NotFound;
