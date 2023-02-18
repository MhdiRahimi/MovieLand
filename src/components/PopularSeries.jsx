import React from 'react';
import {
  Card,
  CardMedia,
  Typography,
  Box,
  Divider,
  Rating,
  Avatar,
} from '@mui/material';
import GenresTv from './GenresTv';
import NotFound from './NotFound';
import none from '../assets/none.jpg';


const PopularSeries = ({ pseries }) => {
  return (
    <>
      {pseries ? (
        <>
          <Box
            sx={{
              display: 'flex',
              p: '0.5rem',
              justifyContent: 'space-between',
              height: '20rem',
              backgroundColor: '#fff',
              borderRadius: '1em',
              width: '65%',
              mb: '2rem',
              boxShadow:
                'box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
            }}
          >
            <Box sx={{ width: '60%' }}>
              <Typography
                color="secondary"
                variant="h5"
                sx={{
                  wordWrap: 'break-word',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  lineClamp: 2,
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {pseries?.name}
              </Typography>
              <Divider
                className="divider"
                sx={{ mt: '0.2rem', width: '100%' }}
              />
              <Typography variant="h6" color="#007E6B" sx={{ mt: '0.8rem' }}>
                <span> Release date : </span>
                {pseries?.first_air_date}
              </Typography>
              <Typography color="#882958" sx={{ mt: '0.5rem' }}>
                MediaType : Series
              </Typography>
              <Typography color="#354954" sx={{ mt: '0.5rem' }}>
                {' '}
                <span style={{ color: '#32184b' }}> Genres : </span>
                {pseries?.genre_ids?.map((genre, i) => (
                  <span key={i} style={{ marginLeft: '2px' }}>
                    <GenresTv genre={genre} />
                  </span>
                ))}
              </Typography>

              <Typography
                color="#354954"
                sx={{
                  mt: '0.9rem',
                  wordWrap: 'break-word',
                  maxHeight: '8rem',
                  textAlign: 'justify',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  lineClamp: 3,
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                }}
                variant="body1"
              >
                {' '}
                <span sx={{ color: '#32184b' }}> Overview : </span>
                {pseries?.overview}
              </Typography>

              <Box sx={{ display: 'flex', mt: '1rem' }}>
                <Rating
                  sx={{
                    alignItems: 'center',
                  }}
                  name="read-only"
                  value={pseries?.vote_average}
                  readOnly
                  max={10}
                  precision={0.5}
                ></Rating>
                <Avatar
                  sx={{
                    backgroundColor: '#FFD700',
                    width: 35,
                    height: 35,
                    ml: '1rem',
                  }}
                >
                  <span style={{ color: '#000', padding: '0.2rem' }}>
                    {' '}
                    {pseries?.vote_average.toFixed(1)}
                  </span>
                </Avatar>
              </Box>
            </Box>

            <Card sx={{ borderRadius: '5px', height: '100%', maxWidth: '30%' }}>
              <CardMedia
                component="img"
                alt="img"
                image={
                  pseries?.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${pseries?.poster_path}`
                    : none
                }
              />
            </Card>
          </Box>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default PopularSeries;
