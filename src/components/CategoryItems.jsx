import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import CardMovieDetails from './CardMovieDetails';
import Titlemod from './Titlemod';
import Paginationstyle from './Paginationstyle';
import { NavLink, useParams, useLocation } from 'react-router-dom';
import { useMediaQuery, Grid, Box } from '@mui/material';
export default function CategoryItems() {
  const matches = useMediaQuery('(min-width:900px)');
  const [genress, setGenress] = useState('movie');
  const [genresId, setGenresId] = useState();
  const [page, setPage] = useState(1);

  let location = useLocation();

  const { data, refetch, isLoading, isRefetching } = useQuery(
    ['items'],
    fetchCategory
  );

  async function fetchCategory() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/${location?.state.mod}?api_key=${process.env.REACT_APP_KEY}&with_genres=${location?.state.id}&language=en-US&page=${page}`
    );
    return res?.data;
  }

  useEffect(() => {
    fetchCategory();
    refetch();
  }, [page, location]);

  if (isLoading && isRefetching) {
    return <Loading />;
  }

  return (
    <>
      <Titlemod
        title={location?.state.name}
        color={'#dcdcdc'}
        margin={'-20rem'}
      />{' '}
      <div style={{ width: '100%' }}></div>
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
      <Paginationstyle page={page} setPage={setPage} />
    </>
  );
}
