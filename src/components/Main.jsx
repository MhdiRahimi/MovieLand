import React, { useState } from 'react';
import { Avatar, Box, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import '@splidejs/react-splide/css';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom';
import Home from './Home';
import Titlemod from './Titlemod';
import SearchMovie from './SearchMovie';
import SearchSeries from './SearchSeries';
import Cards from './Cards';
import Category from './Category';
import { motion } from 'framer-motion';
import CategoryItems from './CategoryItems';
const Main = ({ query, mod, gen, setGen }) => {
  let param = useParams();
  const { name } = param;
  let { genres } = useParams();

  let { genre } = useParams();
  let navigate = useNavigate();

  const [scrollbtn, setScrollBtn] = useState(false);

  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight
      ? setScrollBtn(true)
      : setScrollBtn(false);
  };
  window.addEventListener('scroll', scrollBtnDisplay);

  const scrollUp = () => {
    window.scrollTo({
      top: '0',
      behavior: 'smooth',
    });
  };

  let movies = [];
  for (let i = 0; i < 1; i++) {
    movies.push(query?.results[i]);
  }

  return (
    <>
      <Grid2
        container
        sx={{
          marginTop: '4rem',
          paddingBottom: '3rem',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {scrollbtn && (
          <Grid2
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'fixed',
              bottom: '1rem',
              left: '0rem',
              right: '1rem',
              zIndex: '3000',
            }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Avatar
              component={motion.div}
              whileHover={{ backgroundColor: '#721f35' }}
              onClick={scrollUp}
              sx={{
                backgroundColor: '#ff4779',
                '&.MuiAvatar-root': {
                  cursor: 'pointer',
                },
              }}
            >
              <KeyboardArrowUpIcon sx={{ color: '#dcdcdc' }} />
            </Avatar>
          </Grid2>
        )}
        <Routes>
          <Route path="/" element={<Home gen={gen} />} />
          <Route
            path={`popularseries`}
            element={
              <>
                <Titlemod
                  title={'Popular Series'}
                  color={'#dcdcdc'}
                  margin={'-24rem'}
                />

                <Cards mediaType={'tv'} part={'popular'} />
              </>
            }
          />
          <Route
            path={'topseries'}
            element={
              <>
                <Titlemod
                  title={'Top Series'}
                  color={'#dcdcdc'}
                  margin={'-24rem'}
                />

                <Cards mediaType={'tv'} part={'top_rated'} />
              </>
            }
          />
          <Route
            path={'topmovies'}
            element={
              <>
                <Titlemod
                  title={'Top Movies'}
                  color={'#dcdcdc'}
                  margin={'-24rem'}
                />

                <Cards mediaType={'movie'} part={'top_rated'} />
              </>
            }
          />

          <Route
            path={'popularmovies'}
            element={
              <>
                <Titlemod
                  title={'Popular Movies'}
                  color={'#dcdcdc'}
                  margin={'-24rem'}
                />

                <Cards mediaType={'movie'} part={'popular'} />
              </>
            }
          />

          <Route
            path={`query/movie/:name`}
            element={
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
            }
          />

          <Route
            path={`query/tv/:name`}
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
                    return <SearchSeries pseries={pseries} mod={mod} key={i} />;
                  })}
                </Grid2>
              </>
            }
          />

          {gen === 'movie' ? (
            <Route
              path="category/movie"
              element={
                <>
                  <Category gen={gen} />
                </>
              }
            />
          ) : (
            <Route
              path="category/tv"
              element={
                <>
                  <Category gen={gen} />
                </>
              }
            />
          )}
          <Route path="category/items" element={<CategoryItems />} />
          <Route path="*" element={<Home gen={gen} />} />
        </Routes>
      </Grid2>
    </>
  );
};

export default Main;
