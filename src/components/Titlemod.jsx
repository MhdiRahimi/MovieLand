import React from 'react';
import { Typography } from '@mui/material';
const Titlemod = ({ title, color }) => {
  return (
    <>
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{ m: '0 auto', my: '0.2em', color: color}}
        >
          {title}
        </Typography>
        <div className="divider"></div>
      </div>
    </>
  );
};

export default Titlemod;
