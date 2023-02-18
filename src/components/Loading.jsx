import { Backdrop } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Loading = () => {
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
        <span className="loader"></span>
      </Backdrop>
    </>
  );
};

export default Loading;
