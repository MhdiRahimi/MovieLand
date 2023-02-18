import {
  CardMedia,
  Typography,
  Box,
  Avatar,
  Chip,
  Rating,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recomended from './Recomended';
import Titlemod from './Titlemod';
import { RiDoubleQuotesR, RiDoubleQuotesL } from 'react-icons/ri';
import { IoMdThumbsDown, IoMdThumbsUp } from 'react-icons/io';
import Loading from './Loading';
import none from '../assets/none.jpg'

const SearchMovie = ({ popularMovie, mod }) => {
  const [data, setData] = useState();

  const detailfetch = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${popularMovie?.id}?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
    );
    setData(res.data);
  };
  useEffect(() => {
    detailfetch();
  }, [popularMovie?.id]);

  if (!data) return <Loading />;

  return (
    <>
      <Grid2
        container
        sx={{ maxWidth: '100%', display: 'grid', justifyContent: 'center' }}
      >
        <Typography sx={{ color: '#dcdcdc' }} variant="h4">
          {data?.title}
        </Typography>
      </Grid2>
      <div style={{ width: '100%' }}></div>
      <Grid2 container sx={{ maxWidth: '15%' }}>
        <CardMedia
          container
          sx={{
            mt: '1rem',
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
      <Avatar sx={{ backgroundColor: '#FFD700', ml: '8rem' }}>
        <span style={{ color: '#000' }}>
          {' '}
          {popularMovie?.vote_average.toFixed(1)}
        </span>
      </Avatar>
      <div style={{ width: '100%' }}></div>
      <Box
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
        {data.tagline ? ' ' + data?.tagline + ' ' : 'null'}
        <RiDoubleQuotesR />
      </Typography>
      <div style={{ width: '100%' }}></div>
      <Rating
        name="read-only"
        value={popularMovie?.vote_average}
        readOnly
        max={10}
        precision={0.5}
        sx={{ mt: '0.9rem', mr: '0.5rem' }}
      ></Rating>
      <div style={{ width: '100%' }}></div>
      <Box style={box}>
        <Grid2 container sx={{ minWidth: '48%' }}>
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
        <Grid2 container sx={{ minWidth: '48%' }}>
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
              {data?.budget}
              $
            </Typography>
           
          </div>
          <div style={style}>
            {' '}
            <Typography sx={typostyle}>
              <span>VoteAverage : </span>
              {data?.vote_average.toFixed(0)}{' '}
            </Typography>
          </div>
        </Grid2>
      </Box>{' '}
      <div style={{ width: '100%' }}></div>
      <Titlemod color={'#35185A'} title={'Overview'} />
      <Box style={box_overview}>
        <Typography sx={overviewsType}> {data?.overview}</Typography>
      </Box>
      <Recomended movie_id={popularMovie?.id} mod={mod} />
    </>
  );
};

const box_overview = {
  marginTop: '2rem',
  maxWidth: '90%',
  height: 'auto',
  backgroundColor: '#fff',
  display: 'flex',
  borderRadius: '20px',
  justifyContent: 'space-between',
  padding: '10px 10px 10px 20px',
};
const box = {
  marginTop: '2rem',
  maxWidth: '70%',
  height: '40vh',
  backgroundColor: '#fff',
  display: 'flex',
  borderRadius: '20px',
  justifyContent: 'space-between',
  padding: '10px 10px 10px 20px',
};
const style = {
  height: '3rem',
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
  maxHeight: '1rem',
};
const overviewsType = {
  m: 'auto',
  p: '10px',
};
export default SearchMovie;
