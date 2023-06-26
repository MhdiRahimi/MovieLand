import {
  Card,
  CardMedia,
  Typography,
  Box,
  Divider,
  Rating,
  Avatar,
  Grid,
  useMediaQuery,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Nav from './Nav';
import Loading from './Loading';
import CardMovieDetails from './CardMovieDetails';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Paginationstyle from './Paginationstyle';
import Category from './Category';

const Home = ({ gen }) => {
  const matches = useMediaQuery('(min-width:900px)');

  const [page, setPage] = useState(1);
  const { data, isLoading, refetch, isRefetching } = useQuery(
    ['trendMovies'],
    async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}`
      );

      return res.data;
    }
  );

  useEffect(() => {
    refetch();
  }, [page]);

  if (isLoading && isRefetching) {
    return <Loading />;
  }

  return (
    <>
      <Nav />

      <Grid
        rowGap={5}
        sx={
          matches === true
            ? {
                my: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                mt: '1rem',
                maxWidth: '55%',
              }
            : {
                my: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                mt: '1rem',
                maxWidth: '100%',
              }
        }
      >
        {data?.results?.map((trendMovie, i) => (
          <Box
            sx={{
              display: 'grid',
              mb: '2rem',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '1em',
              width: '100%',
              boxShadow:
                'box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
            }}
          >
            <CardMovieDetails detailInfo={trendMovie} key={i} />
          </Box>
        ))}
      </Grid>
      <div style={{ width: '100%' }}></div>

      <Grid
        item
        xs={4}
        sx={{
          maxWidth: '55%',
          height: '75vh',
          mb: '1rem',
          mt: '1rem',
          bgcolor: 'rgba(196, 108, 255, 0.1)',
          borderRadius: '1rem',
          px: '30px',
        }}
      >
        {' '}
        <h3
          style={{
            display: 'flex',
            justifyContent: 'center',

            fontSize: 'large',
          }}
        >
          Category
        </h3>
        <Category gen={gen} />
      </Grid>

      <div style={{ width: '100%' }}></div>
      <Paginationstyle page={page} setPage={setPage} />
    </>
  );
};

export default Home;
