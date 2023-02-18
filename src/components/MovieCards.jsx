import { Card, CardMedia, Tooltip, Box } from '@mui/material';
import React from 'react';

const MovieCards = (trendMovie) => {
  let title;
  if (trendMovie?.trendMovie?.media_type === 'movie') {
    title = trendMovie?.trendMovie?.title;
  } else {
    title = trendMovie?.trendMovie?.name;
  }

  return (
    <>
      <Tooltip arrow title={title} placement="top-start" followCursor>
        <Card
          sx={{
            m: '1rem',
            cursor: 'pointer',
            border: '4px solid #dcdcdc',
            borderRadius: '10px',
            boxShadow:
              'box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',

            '&.MuiCard-root:hover': {
              // border: '4px solid #db3c91',
              background:
                'linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, #A65AC6,#db3c91) border-box',
              border: '4px solid transparent',
              transition: 'all ease-out 0.3s',
              scale: '1.1',
              
            },
          }}
        >
          <CardMedia
            component="img"
            height="205px"
            image={`https://image.tmdb.org/t/p/w500/${trendMovie?.trendMovie?.poster_path}`}
            width="135px"
            alt="imgs"
          />
        </Card>
      </Tooltip>
    </>
  );
};

export default MovieCards;
