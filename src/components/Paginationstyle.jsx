import React, { useState } from 'react';
import { Pagination } from '@mui/material';

const Paginationstyle = ({ page, setPage }) => {
  const scrollUp = () => {
    window.scrollTo({
      top: '0',
      behavior: 'smooth',
    });
  };
  const handleChange = (event, value) => {
    setPage(value);
    scrollUp();
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '12rem',
        }}
      >
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
