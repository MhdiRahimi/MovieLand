import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Pagination,
  Modal,
  Button,
  IconButton,
} from '@mui/material';

import Header from './Header';
import MovieCards from './MovieCards';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import PopularMovies from './PopularMovies';
import PopularSeries from './PopularSeries';
import Footer from './Footer';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Category from './CategorySeries';

import NotFound from './NotFound';

import {
  Route,
  Routes,
  useSearchParams,
  useParams,
  NavLink,
  useNavigate,
} from 'react-router-dom';
import Home from './Home';
import Titlemod from './Titlemod';
import Paginationstyle from './Paginationstyle';
import SearchMovie from './SearchMovie';
import SearchSeries from './SearchSeries';
import CategoryMovies from './CategoryMovies';
import CategorySeries from './CategorySeries';
import Loading from './Loading';
import TestCard from './TestCard';

const Main = ({ main, query, mod, gen, setGen, }) => {
  let param = useParams();
  const { name } = param;
  let { genres } = useParams();

  let { genre } = useParams();
  let navigate = useNavigate();

  // const { data: pMovie, isLoading ,refetch : fetch} = useQuery(
  //   ['popularMovies', page],

  //   async () => {
  //     const res = await axios.get(
  //       `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}`
  //     );
  //     return res.data;
  //   }
  // );
  // const { data: popularSeries } = useQuery(['pSeries', page], async () => {
  //   const res = await axios.get(
  //     `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}`
  //   );
  //   return res.data;
  // });
  // const { data: topSeries, isLoading: loading } = useQuery(
  //   ['tSeries', page],
  //   async () => {
  //     const res = await axios.get(
  //       `https://api.themoviedb.org/3/${main}/top_rated?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}`
  //     );
  //     return res.data;
  //   }
  // );
  // const { data: topMovies } = useQuery(['tMovies', page], async () => {
  //   const res = await axios.get(
  //     `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}`
  //   );
  //   return res.data;
  // });

  let movies = [];
  for (let i = 0; i < 1; i++) {
    movies.push(query?.results[i]);
  }
  
  console.log(main);
  return (
    <>
      <Grid2
        rowGap={5}
        container
        sx={{
          marginTop: '3rem',
          paddingBottom: '3rem',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path={`popularseries`}
            element={
              <>
                <Titlemod title={'Popular Series'} color={'#dcdcdc'} />
                {/* <Grid2
                  rowGap={3}
                  container
                  sx={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {pMovie?.results.map((pseries, i) => {
                    return <PopularSeries pseries={pseries} key={i} />;
                  })}
                </Grid2>{' '} */}{' '}
                <TestCard
                  mediaType={'tv'}
                  part={'popular'}
                  
                />
                
              </>
            }
          />
          <Route
            path={'topseries'}
            element={
              <>
                <Titlemod title={'Top Series'} color={'#dcdcdc'} />
                {/* <Grid2
                  rowGap={3}
                  container
                  sx={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {topSeries?.results.map((pseries, i) => {
                    return <PopularSeries pseries={pseries} key={i} />;
                  })}
                </Grid2>{' '} */}{' '}
                <TestCard
                  mediaType={'tv'}
                  part={'top_rated'}
                
                />
                {/* <Paginationstyle page={page} setPage={setPage} /> */}
              </>
            }
          />
          <Route
            path={'topmovies'}
            element={
              <>
                <Titlemod title={'Top Movies'} color={'#dcdcdc'} />
                {/* <Grid2
                  rowGap={3}
                  container
                  sx={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {topSeries?.results.map((popularMovie, i) => {
                    return (
                      <PopularMovies popularMovie={popularMovie} key={i} />
                    );
                  })}
                </Grid2> */}{' '}
                <TestCard
                  mediaType={'movie'}
                  part={'top_rated'}
                 
                />
                {/* <Paginationstyle page={page} setPage={setPage} /> */}
              </>
            }
          />

          <Route
            path={'popularmovies'}
            element={
              <>
                <Titlemod title={'Popular Movies'} color={'#dcdcdc'} />
                {/* <Grid2
                  rowGap={3}
                  container
                  sx={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                > */}
                {/* {pMovie?.results.map((popularMovie, i) => {
                    return (
                      <PopularMovies popularMovie={popularMovie} key={i} />
                    );
                  })} */}
                {/* </Grid2> */}
                <TestCard
                  mediaType={'movie'}
                  part={'popular'}
                 
                />
                {/* <Paginationstyle page={page} setPage={setPage} /> */}
              </>
            }
          />

          {mod === 'movie' ? (
            <Route
              path={`query/:name`}
              element={
                <>
                  <Grid2
                    rowGap={1}
                    container
                    sx={{
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {movies?.map((popularMovie, i) => {
                      return (
                        <SearchMovie
                          popularMovie={popularMovie}
                          mod={mod}
                          key={i}
                        />
                      );
                    })}
                  </Grid2>
                </>
              }
            />
          ) : (
            <Route
              path={'query/:name'}
              element={
                <>
                  <Grid2
                    rowGap={1}
                    container
                    sx={{
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {movies?.map((pseries, i) => {
                      return (
                        <SearchSeries pseries={pseries} mod={mod} key={i} />
                      );
                    })}
                  </Grid2>
                </>
              }
            />
          )}

          {gen === 'movie' ? (
            <Route
              path="category/movie"
              element={
                <>
                  <Box
                    sx={{
                      minWidth: '100%',
                      display: 'flex',
                      mt: '3rem',
                      ml: '8rem',
                    }}
                  >
                    <Button
                      color="primary"
                      sx={{
                        justifyContent: 'start',
                        justifySelf: 'start',
                        '&.MuiButton-root:hover': {
                          backgroundColor: '#35185A',
                        },
                      }}
                      size="small"
                      variant="outlined"
                      onClick={() => {
                        setGen('tv');
                        navigate('category/tv');
                      }}
                    >
                      category Series
                    </Button>
                  </Box>
                  <CategoryMovies />
                </>
              }
            />
          ) : (
            <Route
              path="category/tv"
              element={
                <>
                  <Box
                    sx={{
                      minWidth: '100%',
                      mt: '3rem',
                      ml: '8rem',
                      display: 'flex',
                    }}
                  >
                    <Button
                      color="primary"
                      sx={{
                        justifyContent: 'start',
                        justifySelf: 'start',

                        '&.MuiButton-root:hover': {
                          backgroundColor: '#35185A',
                        },
                      }}
                      size="small"
                      variant="outlined"
                      onClick={() => {
                        setGen('movie');
                        navigate('category/movie');
                      }}
                    >
                      category Movies
                    </Button>
                  </Box>
                  <CategorySeries setGen={setGen} />
                </>
              }
            />
          )}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Grid2>

      {/* <button
          onClick={() => setActive(!active)}
          className={`hamburger hamburger--spin ${active ? 'is-active' : ''}`}
        >
          <span className="hamburger-box ">
            <span className="hamburger-inner "></span>
          </span>
        </button> */}
    </>
  );
};

export default Main;
