import {
  CardMedia,
  Typography,
  Box,
  Avatar,
  Chip,
  Rating,
  useMediaQuery,
  Grid,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recomended from './Recomended';
import Titlemod from './Titlemod';
import { RiDoubleQuotesR, RiDoubleQuotesL } from 'react-icons/ri';
import { IoMdThumbsDown, IoMdThumbsUp } from 'react-icons/io';
import Loading from './Loading';
import none from '../assets/none.jpg';
import { useQuery } from '@tanstack/react-query';
import NotFound from './NotFound';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { maxHeight } from '@mui/system';
const SearchMovie = ({ popularMovie, mod }) => {
  const location = useLocation();
  let id = popularMovie?.id || location?.state?.id;
  let mods = location?.state?.mod || mod;
  console.log(location);
  const matches = useMediaQuery('(min-width:1200px)');
  async function detailfetch() {
    if (id) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}`
      );
      return res?.data;
    }
  }
  const {
    data,
    refetch,
    isFetching,
    isError,
    isRefetchError,
    isLoadingError,
    isLoading,
  } = useQuery(['serachMovies'], detailfetch, {
    keepPreviousData: true,
  });

  useEffect(() => {
    refetch();
  }, [id, location?.pathname]);

  if (isLoading || isFetching) return <Loading />;
  if (isError || isRefetchError || isLoadingError) return <NotFound />;
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <>
      {!matches
        ? data && (
            <>
              <Grid2
                container
                component={motion.div}
                variants={container}
                initial="hidden"
                animate="visible"
                sx={{ height: '60%', justifyContent: 'center' }}
              >
                <Grid>
                  <Typography
                    gridTemplateRows="auto"
                    textAlign={'center'}
                    sx={{
                      color: '#35185A',
                    }}
                    variant="h4"
                  >
                    {data?.title}
                  </Typography>
                </Grid>
                <Grid
                  container
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {' '}
                  <CardMedia
                    container
                    sx={{
                      width: 4 / 8,
                      border: '4px solid #dcdcdc',
                      borderRadius: '10px',
                      mt: '1.5rem',
                    }}
                    component="img"
                    alt="img"
                    image={
                      !data?.poster_path
                        ? none
                        : `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                    }
                  />
                  <Avatar
                    sx={{
                      backgroundColor: '#FFD700',
                      border: '4px solid #dcdcdc',
                      mt: '76%',
                      position: 'absolute',
                      width: 50,
                      height: 50,
                    }}
                  >
                    <span style={{ color: '#000' }}>
                      {' '}
                      {data?.vote_average.toFixed(1)}
                    </span>
                  </Avatar>
                </Grid>
                <Grid>
                  <Box
                    component={motion.div}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    sx={{
                      mt: '1.5rem',
                      p: '10px',

                      display: 'flex',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Chip
                      sx={{
                        width: '3rem',
                        mx: '0.3rem',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        cursor: 'pointer',
                      }}
                      label={
                        <IoMdThumbsDown
                          size={20}
                          color="#ff4779"
                          style={{ marginTop: '0.2rem' }}
                        />
                      }
                    ></Chip>
                    <Chip
                      sx={{
                        width: '3rem',
                        mx: '0.3rem',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        cursor: 'pointer',
                      }}
                      label={<IoMdThumbsUp size={20} color="#35185A" />}
                    />
                  </Box>
                </Grid>{' '}
                <div style={{ width: '100%' }}></div>
                <Grid>
                  <Typography
                    gridTemplateRows="auto"
                    textAlign={'center'}
                    color="secondary"
                    variant="h5"
                    sx={overviewsType}
                  >
                    <RiDoubleQuotesL />
                    {data?.tagline ? ' ' + data?.tagline + ' ' : 'null'}
                    <RiDoubleQuotesR />
                  </Typography>
                </Grid>{' '}
                <div style={{ width: '100%' }}></div>
                <Rating
                  gridTemplateRows="auto"
                  textAlign={'center'}
                  name="read-only"
                  value={data?.vote_average}
                  readOnly
                  max={10}
                  precision={0.5}
                  sx={{ mt: '0.9rem' }}
                ></Rating>
                <div style={{ width: '100%' }}></div>
                <Grid
                  sx={{
                    mt: '2rem',
                    height: 'auto',
                    bgcolor: '#fff',
                    borderRadius: '12px',
                    width: '100%',
                    mx: '2rem',
                    px: '0.5rem',
                    pb: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#dcdcdc',
                      height: 'auto',
                      width: '100%',
                      borderRadius: '12px',
                      marginTop: '0.5rem',
                    }}
                  >
                    <span style={mobTypeStyle}> Realese date : </span>
                    <Typography gridTemplateRows="auto" style={mobTypeStyle}>
                      {data?.release_date}
                    </Typography>
                  </div>{' '}
                  <div
                    style={{
                      backgroundColor: '#dcdcdc',
                      height: 'auto',
                      width: '100%',
                      borderRadius: '12px',
                      marginTop: '0.5rem',
                    }}
                  >
                    <span style={mobTypeStyle}>Genres :</span>
                    <Typography gridTemplateRows="auto" style={mobTypeStyle}>
                      {data?.genres.map((genre, i) => (
                        <span key={i}>{genre?.name}</span>
                      ))}
                    </Typography>
                  </div>
                  <div
                    style={{
                      backgroundColor: '#dcdcdc',
                      height: 'auto',
                      width: '100%',
                      borderRadius: '12px',
                      marginTop: '0.5rem',
                    }}
                  >
                    <span style={mobTypeStyle}> ProductionCountries : </span>
                    <Typography style={mobTypeStyle}>
                      {data?.production_countries?.map((country, i) => (
                        <span key={i}>{country?.name}</span>
                      ))}
                    </Typography>
                  </div>{' '}
                  <div
                    style={{
                      backgroundColor: '#dcdcdc',
                      height: 'auto',
                      width: '100%',
                      borderRadius: '12px',
                      marginTop: '0.5rem',
                    }}
                  >
                    <span style={mobTypeStyle}>Languages :</span>
                    <Typography gridTemplateRows="auto" style={mobTypeStyle}>
                      {data?.spoken_languages?.map((lang, i) => (
                        <span key={i}>{` ${lang?.english_name} `}</span>
                      ))}
                    </Typography>
                  </div>
                  <div
                    style={{
                      backgroundColor: '#dcdcdc',
                      height: 'auto',
                      width: '100%',
                      borderRadius: '12px',
                      marginTop: '0.5rem',
                    }}
                  >
                    <Typography
                      textAlign={'center'}
                      sx={{
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span> RunTime : </span>
                      {data?.runtime} min
                    </Typography>
                  </div>{' '}
                  <div
                    style={{
                      backgroundColor: '#dcdcdc',
                      height: 'auto',
                      width: '100%',
                      borderRadius: '12px',
                      marginTop: '0.5rem',
                    }}
                  >
                    <Typography
                      textAlign={'center'}
                      sx={{
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span> Status: </span>

                      {data?.status}
                    </Typography>
                  </div>{' '}
                  <div
                    style={{
                      backgroundColor: '#dcdcdc',
                      height: 'auto',
                      width: '100%',
                      borderRadius: '12px',
                      marginTop: '0.5rem',
                    }}
                  >
                    <Typography
                      textAlign={'center'}
                      sx={{
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>Budget : </span>
                      {data?.budget}$
                    </Typography>
                  </div>{' '}
                  <div
                    style={{
                      backgroundColor: '#dcdcdc',
                      height: 'auto',
                      width: '100%',
                      borderRadius: '12px',
                      marginTop: '0.5rem',
                    }}
                  >
                    <Typography
                      textAlign={'center'}
                      sx={{
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>VoteAverage : </span>
                      {data?.vote_average.toFixed(1)}
                    </Typography>
                  </div>
                </Grid>{' '}
                <Titlemod
                  color={'#35185A'}
                  title={'Overview'}
                  margin={'2rem'}
                />
                <Box style={box_overview}>
                  <Typography sx={overviewsType}> {data?.overview}</Typography>
                </Box>{' '}
                <Recomended movie_id={id} mod={mods} />
              </Grid2>
            </>
          )
        : data && (
            <>
              <Grid2
                container
                component={motion.div}
                variants={container}
                initial="hidden"
                animate="visible"
                sx={{
                  maxWidth: '100%',
                  display: 'grid',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{ color: '#dcdcdc', mt: '-14rem' }}
                  variant="h4"
                >
                  {data?.title}
                </Typography>
              </Grid2>
              <div style={{ width: '100%' }}></div>
              <Grid2
                container
                sx={{ maxWidth: '15%' }}
                component={motion.div}
                variants={container}
                initial="hidden"
                animate="visible"
              >
                <CardMedia
                  container
                  sx={{
                    mt: '-10rem',
                    display: 'grid',
                    height: '100%',
                    maxWidth: '96%',
                    justifyContent: 'center',

                    border: '4px solid #dcdcdc',
                    borderRadius: '10px',
                    mb: '-2.7rem',
                  }}
                  component="img"
                  alt="img"
                  image={
                    !data?.poster_path
                      ? none
                      : `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                  }
                />
              </Grid2>
              <div style={{ width: '100%' }}></div>
              <Avatar
                sx={{
                  backgroundColor: '#FFD700',
                  ml: '8rem',
                  border: '3px solid #dcdcdc',
                  position: 'relative',
                }}
              >
                <span style={{ color: '#000' }}>
                  {' '}
                  {data?.vote_average.toFixed(1)}
                </span>
              </Avatar>
              <div style={{ width: '100%' }}></div>
              <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                animate="visible"
                sx={{
                  m: 'auto',
                  p: '10px',
                  backgroundColor: '#f2f3f8',
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <Chip
                  sx={{
                    width: '3rem',
                    mx: '0.3rem',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    cursor: 'pointer',
                  }}
                  label={
                    <IoMdThumbsDown
                      size={20}
                      color="#ff4779"
                      style={{ marginTop: '0.2rem' }}
                    />
                  }
                ></Chip>
                <Chip
                  sx={{
                    width: '3rem',
                    mx: '0.3rem',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    cursor: 'pointer',
                  }}
                  label={<IoMdThumbsUp size={20} color="#35185A" />}
                />
              </Box>
              <div style={{ width: '100%' }}></div>
              <Typography color="secondary" variant="h5" sx={overviewsType}>
                <RiDoubleQuotesL />
                {data?.tagline ? ' ' + data?.tagline + ' ' : 'null'}
                <RiDoubleQuotesR />
              </Typography>
              <div style={{ width: '100%' }}></div>
              <Rating
                name="read-only"
                value={data?.vote_average}
                readOnly
                max={10}
                precision={0.5}
                sx={{ mt: '0.9rem', mr: '0.5rem' }}
              ></Rating>
              <div style={{ width: '100%' }}></div>
              <Box
                style={box}
                component={motion.div}
                variants={item}
                initial="hidden"
                animate="visible"
              >
                <Grid2 sm={12} container sx={{ minWidth: '48%' }}>
                  <div style={style}>
                    <Typography sx={typostyle}>
                      <span> Realese date : </span>

                      {data?.release_date}
                    </Typography>
                  </div>
                  <div style={style}>
                    <Typography sx={typostyle}>
                      <span>Status : </span>
                      {data?.status}
                    </Typography>
                  </div>
                  <div style={style}>
                    <Typography sx={typostyle}>
                      <span>Genres : </span>
                      {data?.genres.map((genre, i) => (
                        <span key={i} style={{ marginLeft: '2px' }}>
                          {genre?.name}
                        </span>
                      ))}
                    </Typography>
                  </div>
                  <div style={style}>
                    <Typography sx={typostyle}>
                      <span>ProductionCountries : </span>
                      {data?.production_countries?.map((country, i) => (
                        <span key={i}>{country?.name}</span>
                      ))}
                    </Typography>
                  </div>
                </Grid2>
                <Grid2 container sx={{ minWidth: '48%' }} sm={12}>
                  <div style={style}>
                    <Typography sx={typostyle}>
                      <span>Languages : </span>
                      {data?.spoken_languages?.map((lang, i) => (
                        <span key={i}>{` ${lang?.english_name} `}</span>
                      ))}
                    </Typography>
                  </div>
                  <div style={style}>
                    <Typography sx={typostyle}>
                      <span>RunTime : </span>
                      {data?.runtime}
                      min
                    </Typography>
                  </div>
                  <div style={style}>
                    <Typography sx={typostyle}>
                      <span>Budget : </span>
                      {data?.budget}$
                    </Typography>
                  </div>
                  <div style={style}>
                    {' '}
                    <Typography sx={typostyle}>
                      <span>VoteAverage : </span>
                      {data?.vote_average.toFixed(1)}{' '}
                    </Typography>
                  </div>
                </Grid2>
              </Box>{' '}
              <div style={{ width: '100%' }}></div>
              <Titlemod color={'#35185A'} title={'Overview'} />
              <Box style={box_overview}>
                <Typography sx={overviewsType}> {data?.overview}</Typography>
              </Box>{' '}
              <Recomended movie_id={id} mod={mods} />
            </>
          )}
    </>
  );
};

const box_overview = {
  marginTop: '2rem',
  maxWidth: '80%',
  height: 'auto',
  backgroundColor: '#fff',
  display: 'flex',
  borderRadius: '20px',
  justifyContent: 'center',
  padding: '10px 10px 10px 20px',
};
const box = {
  marginTop: '2rem',
  maxWidth: '80%',
  height: '42vh',
  backgroundColor: '#fff',
  display: 'flex',
  borderRadius: '20px',
  justifyContent: 'space-between',
  padding: '10px 10px 10px 20px',
};
const style = {
  height: '2.8rem',
  backgroundColor: '#f2f3f8',
  boxShadow: ' 0 0 25px rgb(0 0 0 / 5%)',
  borderRadius: '8px',
  marginLeft: '0rem',
  marginTop: '0.5rem',
  marginRight: '0.5rem',
  width: '100%',
};
const typostyle = {
  m: 'auto',
  p: '10px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  lineClamp: 1,
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  wordWrap: 'break-word',
  maxHeight: '2rem',
};
const overviewsType = {
  m: 'auto',
  p: '10px',
};

const mobTypeStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  lineClamp: 2,
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  wordWrap: 'break-word',
  padding: '10px',
  height: 'auto',
};
export default SearchMovie;
