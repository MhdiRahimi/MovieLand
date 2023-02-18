import { Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';
import CardMovieDetails from './CardMovieDetails';
import Paginationstyle from './Paginationstyle';

const Cards = ({ mediaType, part }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, refetch, isRefetching } = useQuery(
    ['pSeries'],
    fetchData
  );
  async function fetchData() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${part}?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}`
    );
    return res.data;
  }
  useEffect(() => {
    refetch();
  }, [mediaType, part, page]);
  useEffect(() => {
    setPage(1);
  }, [mediaType, part]);

  if (isRefetching || isLoading) return <Loading />;
  return (
    <>
      <div style={{ width: '100%' }}></div>
      <Grid2
       xs={12}
      
        rowGap={5}
        container
        sx={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          mt:'-14rem',
         
        }}
      >
        {data?.results?.map((trendMovie, i) => (
          <Box
         
            key={i}
            sx={{
              display: 'grid',
              mt:'2rem',
             
              justifyContent: 'center',
              alignItems:'center',
              borderRadius: '1em',
              width: '65%',
              boxShadow:
                'box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
            }}
          >
            <CardMovieDetails detailInfo={trendMovie} key={i} />
          </Box>
        ))}
      </Grid2>
      <div style={{ width: '100%', }}></div>
      <Paginationstyle page={page} setPage={setPage} />
    </>
  );
};

export default Cards;
