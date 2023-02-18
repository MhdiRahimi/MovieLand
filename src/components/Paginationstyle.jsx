import React, { useState } from 'react';
import { Pagination } from '@mui/material';

const Paginationstyle = ({ page, setPage }) => {
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={50}
          color="secondary"
          page={page}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Paginationstyle;
