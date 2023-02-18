import { QueryClient, useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopularMovies from './PopularMovies';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Paginationstyle from './Paginationstyle';
import { NavLink, useParams } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';
import Titlemod from './Titlemod';
import PopularSeries from './PopularSeries';

const CategorySeries = ({ setGen }) => {
  const [page, setPage] = useState(1);

  const fetchCategory = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_KEY}&with_genres=${genresId}&language=en-US&page=${page}`
    );
    setData(res?.data);
  };
  const { data: categories } = useQuery(['categoryMovie'], async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_KEY}`
    );
    return res?.data;
  });

  const [data, setData] = useState();
  const [genress, setGenress] = useState();
  const [genresId, setGenresId] = useState();
  function infoGenres(name, id) {
    setGenress(name);
    setGenresId(id);
  }
  useEffect(() => {
    fetchCategory();
  }, [genresId, page]);
  let { genres } = useParams();


  return (
    <>
      {' '}
      <div style={{ width: '100%' }}></div>
      <Box sx={{ mt: '-4rem' }}>
        {genress ? (
          <Titlemod title={'Category : ' + genress} color="#dcdcdc" />
        ) : (
          <Titlemod title={'Category : Series'} color="#dcdcdc" />
        )}
      </Box>
      <div style={{ width: '100%' }}></div>
      <Grid2 container sx={{ justifyContent: 'center', width: '70%',  }}>
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
      <Grid2
        rowGap={3}
        container
        sx={{
          marginTop: '3em',

          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {data?.results.map((pseries, i) => {
          return <PopularSeries pseries={pseries} key={i} />;
        })}
      </Grid2>
      <Paginationstyle page={page} setPage={setPage} />
    </>
  );
};

export default CategorySeries;
