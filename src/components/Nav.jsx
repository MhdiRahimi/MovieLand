import React, { useState, useEffect } from 'react';
import { Box, Modal, useMediaQuery } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MovieCards from './MovieCards';
import CardMovieDetails from './CardMovieDetails';
import SearchMovie from './SearchMovie';
import { AnimatePresence, motion } from 'framer-motion';
import NotFound from './NotFound';
import { Link, NavLink, useNavigate } from 'react-router-dom';
const Nav = () => {
 
  const [open, setOpen] = useState(false);
  const [detailInfo, setDetailInfo] = useState();
  let navigate = useNavigate();

  const changeData = (info) => {
    setDetailInfo(info);
  };

  const { data, isError } = useQuery(['trendMovies'], async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_KEY}`
    );
    return res.data;
  });
  if (isError) return <NotFound />;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={navcss}
      >
        <Box
          sx={{
            maxWidth: '55rem',
            flexWrap: 'nowrap',
            overflow: 'hidden',
            mt: '3rem',
            mb: '2rem',
            px: '1rem',
            justifyContent: 'flex-center',
          }}
        >
          <Splide
            options={{
              maxWidth: '55rem',
              perPage: '5',
              perMove: '1',
              pagination: false,
              autoplay: true,
              pauseOnHover: true,
              pauseOnFocus: true,
              arrows: true,
              omitEnd: true,
              rewind: true,
              breakpoints: {
                640: {
                  perPage: '3',
                  perMove: '1',
                  pagination: false,
                  autoplay: true,
                  pauseOnHover: true,
                  pauseOnFocus: true,
                  arrows: false,
                  omitEnd: true,
                  rewind: true,
                  focus: 'center',
                  fixedWidth: 200,
                  fixedHeight: 300,
                },
                800: {
                  perPage: 4,
                  perMove: 1,
                  pagination: false,
                  autoplay: false,
                  pauseOnHover: true,
                  pauseOnFocus: true,
                  arrows: true,
                  omitEnd: false,
                  rewind: false,
                  type: 'loop',

                  focus: 'start',
                  height: 400,
                },
                480: {
                  perPage: 1,
                  perMove: 1,
                  pagination: false,
                  autoplay: false,
                  pauseOnHover: true,
                  pauseOnFocus: true,
                  arrows: false,
                  omitEnd: false,
                  rewind: false,
                  type: 'loop',
                  fixedWidth: 200,
                  fixedHeight: 300,
                  focus: 'center',
                },
              },
            }}
          >
            {data?.results.map((trendMovie) => {
              return (
                <SplideSlide
                  key={trendMovie.id}
                  onClick={() => changeData(trendMovie)}
                >
                  <MovieCards trendMovie={trendMovie} />
                </SplideSlide>
              );
            })}
          </Splide>
        </Box>
      </motion.div>

  
    </>
  );
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  overflowY: 'scroll',
  '&:focus-visible': {
    outline: 'none',
  },
};

const navcss = {
  display: 'grid',
  justifyContent: 'center',
  maxHeight: '100vh',
  marginTop: '-15rem',
};

export default Nav;
