import {
  Card,
  CardMedia,
  Typography,
  Box,
  Divider,
  Rating,
  Avatar,
} from '@mui/material';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Nav from './Nav';
import Loading from './Loading';
import CardMovieDetails from './CardMovieDetails';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const Home = () => {
  const { data, isLoading } = useQuery(['trendMovies'], async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_KEY}`
    );

    return res.data;
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
  
      <Box
        sx={{
          display: 'flex',
          p: '0.2rem',
          justifyContent: 'space-between',

          borderRadius: '1em',
          width: '65%',
          boxShadow:
            'box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
        }}
      >
        {' '}
        <Grid2 container rowGap={5} sx={{ mb: '1rem' }}>
          {data?.results?.map((trendMovie, i) => (
            <CardMovieDetails detailInfo={trendMovie} key={i} />
          ))}
        </Grid2>
      </Box>
    </>
  );
};

export default Home;
