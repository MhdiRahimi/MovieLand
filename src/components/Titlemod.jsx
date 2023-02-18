import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
const Titlemod = ({ title, color ,margin}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'grid',
          justifyContent: 'center',
          marginTop: margin,
        }}
      >
        <Typography
          variant="h5"
          sx={{ m: '0 auto', my: '0.2em', color: color }}
        >
          {title}
        </Typography>
        <div className="divider"></div>
      </motion.div>
    </>
  );
};

export default Titlemod;
