import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';
import CardMovieDetails from './CardMovieDetails';
import Paginationstyle from './Paginationstyle';

const TestCard = ({ mediaType, part }) => {
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
      {data?.results?.map((trendMovie, i) => (
        <Box
          key={i}
          sx={{
            display: 'flex',
            p: '0.2rem',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            borderRadius: '1em',
            width: '65%',
            boxShadow:
              'box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
          }}
        >
          <CardMovieDetails detailInfo={trendMovie} key={i} />
        </Box>
      ))}
      <div style={{ width: '100%' }}></div>
      <Paginationstyle page={page} setPage={setPage} />
    </>
  );
};

export default TestCard;
