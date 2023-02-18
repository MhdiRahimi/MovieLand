import {
  CardMedia,
  Typography,
  Box,
  Divider,
  Rating,
  Avatar,
} from '@mui/material';
import React from 'react';
import Genres from './Genres';
import GenresTv from './GenresTv';

import none from '../assets/none.jpg';
const CardMovieDetails = ({ detailInfo }) => {


  
  let title, release;

  if(detailInfo?.title) {
    title = detailInfo?.title
     release = detailInfo?.release_date;
  }else{
    title = detailInfo?.name
    release = detailInfo?.first_air_date;
  }




  return (
    <>
      {detailInfo ? (
        <Box
          sx={{
            display: 'flex',
            p: '0.5rem',
            justifyContent: 'space-between',
            height: '100%',
            backgroundColor: '#fff',
            borderRadius: '1em',
            width: '100%',
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
              {title}
            </Typography>
            <Divider className="divider" sx={{ mt: '0.2rem', width: '100%' }} />
            <Typography variant="h6" color="#007E6B" sx={{ mt: '0.8rem' }}>
              <span> Release date : </span> {release}
            </Typography>
            <Typography color="#882958" sx={{ mt: '0.5rem' }}>
              MediaType : {detailInfo.media_type === 'tv' ? 'Series' : 'Movie'}
            </Typography>
            <Typography color="#354954" sx={{ mt: '0.5rem' }}>
              <span style={{ color: '#32184b' }}> Genres : </span>
              {detailInfo?.genre_ids?.map((genre, i) => (
                <span key={i} style={{ marginLeft: '2px' }}>
                  {detailInfo?.media_type === 'tv' ? (
                    <GenresTv genre={genre} />
                  ) : (
                    <Genres genre={genre} />
                  )}
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
                lineClamp: 4,
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
              }}
              variant="body1"
            >
              <Typography sx={{ color: '#32184b' }}> Overview : </Typography>
              {detailInfo?.overview}
            </Typography>
            <Box sx={{ display: 'flex', mt: '1rem' }}>
              <Rating
                sx={{
                  alignItems: 'center',
                }}
                name="read-only"
                value={detailInfo?.vote_average}
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
                  {detailInfo?.vote_average.toFixed(1)}
                </span>
              </Avatar>
            </Box>
          </Box>
          <CardMedia
            sx={{ borderRadius: '5px', height: '100%', maxWidth: '35%' }}
            component="img"
            alt="img"
            image={
              !detailInfo?.poster_path
                ? none
                : `https://image.tmdb.org/t/p/w500/${detailInfo?.poster_path}`
            }
          />
        </Box>
      ) : (
        ''
      )}
    </>
  );
};

export default CardMovieDetails;
