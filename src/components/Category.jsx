import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Paginationstyle from './Paginationstyle';
import { NavLink, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import Titlemod from './Titlemod';

import CardMovieDetails from './CardMovieDetails';
import Loading from './Loading';

const Category = ({ gen }) => {
  const [page, setPage] = useState(1);

  const {
    data: categories,
    refetch: fetchAgain,
    isLoading: loading,
    isRefetching: fetching,
  } = useQuery(['categoryMovie'], fetchGenre);
  async function fetchGenre() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/${gen}/list?api_key=${process.env.REACT_APP_KEY}`
    );
    return res?.data;
  }
  const { data, refetch, isLoading, isRefetching } = useQuery(
    ['items'],
   fetchCategory
  );

  async function fetchCategory() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/${gen}?api_key=${process.env.REACT_APP_KEY}&with_genres=${genresId}&language=en-US&page=${page}`
    );
    return res?.data;
  }

  const [genress, setGenress] = useState('movie');
  const [genresId, setGenresId] = useState();
  let { genres } = useParams();

  function infoGenres(name, id) {
    setGenress(name);
    setGenresId(id);
  }

  useEffect(() => {
    refetch();
    fetchAgain();
  }, [gen, page, genresId,]);

  useEffect(() => {
    setPage(1);
  }, [gen, genresId]);

  useEffect(() => {
    setGenress('');
  }, [gen]);

  let title;
  if (gen === 'tv') {
    title = 'Series';
  } else {
    title = 'Movie';
  }

  if (fetching || isRefetching || loading || isLoading) return <Loading />;
  return (
    <>
      <div style={{ width: '100%' }}></div>
      <Box>
        {genress ? (
          <Titlemod
            title={'Category : ' + genress}
            color="#dcdcdc"
            margin={'-10rem'}
          />
        ) : (
          <Titlemod
            title={'Category : ' + title}
            color="#dcdcdc"
            margin={'-10rem'}
          />
        )}
      </Box>
      <div style={{ width: '100%' }}></div>
      <Grid2
        container
        sx={{
          justifyContent: 'center',
          width: '70%',
          mt: '1rem',
          zIndex: '1000',
        }}
      >
        {categories?.genres.map((cat) => (
          <NavLink
            className="navlink_category"
            key={cat.id}
            onClick={() => infoGenres(cat.name, cat.id)}
          >
            {cat.name}
          </NavLink>
        ))}
      </Grid2>

      {data?.results.map((pseries, i) => {
        return (
          <Box
            sx={{
              p: '0.2rem',
              mt: '1.5rem',
              justifyContent: 'space-between',

              borderRadius: '1em',
              maxWidth: '65%',
              boxShadow:
                'box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
            }}
          >
            <CardMovieDetails detailInfo={pseries} key={i} />
          </Box>
        );
      })}

      <div style={{ width: '100%' }}></div>
      {data && <Paginationstyle page={page} setPage={setPage} />}
    </>
  );
};

export default Category;
