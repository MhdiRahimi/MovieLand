import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import classes from './searchbar.module.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const SearchBar = ({ pullData }) => {
  const [mod, setMod] = useState('movie');
  const [input, setInput] = useState('');

  const matches = useMediaQuery('(min-width:600px)');

  const inputHandler = async (e) => {
    e.preventDefault();
    const res = await axios.get(`
     https://api.themoviedb.org/3/search/${mod}?api_key=${process.env.REACT_APP_KEY}&query=${input}`);
    const datas = res?.data;
    setInput('');
    pullData(datas, mod);
  };
  const changeMod = (e) => {
    setMod(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ToggleButtonGroup
        size="small"
        color="primary"
        style={
          !matches
            ? {
                paddingTop: '2rem',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '4rem',
              }
            : toggleBtn
        }
        value={mod}
        exclusive
        onChange={changeMod}
        aria-label="Search"
      >
        <ToggleButton value="tv">Series</ToggleButton>
        <ToggleButton value="movie">Movie</ToggleButton>
      </ToggleButtonGroup>
      <Box
        sx={{
          display: 'flex',
          mb: '-1.5rem',
          justifyContent: 'center',
        }}
      >
        <input
          type="text"
          value={input}
          placeholder={`Search ${mod === 'tv' ? 'series' : 'movie'}...`}
          className={classes.inr}
          onChange={(e) => setInput(e.target.value)}
        />
        <IconButton
          onClick={inputHandler}
          size="small"
          sx={{
            '&.MuiIconButton-root': {
              padding: '0.8rem',
              fontSize: '1px',
              mt: '1.5rem',
              ml: '-3.1rem',
            },
          }}
        >
          <NavLink to={`/query/${mod}/${input}`}>
            <SearchRoundedIcon
              color="secondary"
              fontSize="medium"
              sx={{
                '&.MuiSvgIcon-root:hover': {
                  opacity: '0.8',
                  transition: 'all ease 0.3s',
                },
              }}
            />
          </NavLink>
        </IconButton>
      </Box>
    </motion.div>
  );
};

const toggleBtn = { display: 'flex', justifyContent: 'center', marginTop: '4rem' };
export default SearchBar;
