/* eslint-disable no-lone-blocks */
import {
  CardMedia,
  Typography,
  Box,
  Divider,
  Rating,
  Avatar,
  useMediaQuery,
  Grid,
} from '@mui/material';

import Genres from './Genres';
import GenresTv from './GenresTv';
import { motion } from 'framer-motion';
import none from '../assets/none.jpg';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Loading from './Loading';

import { Link, NavLink, useNavigate } from 'react-router-dom';

const CardMovieDetails = ({ detailInfo }) => {
  let title, release;
  const matches = useMediaQuery('(min-width:600px)');

  if (detailInfo?.title) {
    title = detailInfo?.title;
    release = detailInfo?.release_date;
  } else {
    title = detailInfo?.name;
    release = detailInfo?.first_air_date;
  }

  window.onload = () => {
    window.scrollTo({
      top: '0',
      behavior: 'smooth',
    });
  };

  let genre = detailInfo?.genre_ids?.map((genre, i) => (
    <span key={i} style={{ marginLeft: '2px' }}>
      {detailInfo?.media_type === 'tv' ? (
        <GenresTv genre={genre} />
      ) : (
        <Genres genre={genre} />
      )}
    </span>
  ));

  let navigate = useNavigate();

  function detailSearch() {
    if (detailInfo?.title) {
      navigate(`/query/movie/${title}`, {
        state: {
          id: detailInfo?.id,
          mod: 'movie',
        },
      });
    } else {
      navigate(`/query/tv/${title}`, {
        state: {
          id: detailInfo?.id,
          mod: 'tv',
        },
      });
    }
  }

  return (
    <>
      {!matches ? (
        <Grid2
          container
          xs={12}
          sm={12}
          md={12}
          sx={{ justifyContent: 'center' }}
        >
          {detailInfo && (
            <Box
              onClick={detailSearch}
              sx={{
                display: 'flex-wrap',
                p: '0.5rem',

                backgroundColor: '#fff',
                borderRadius: '1em',
                width: '100%',
                boxShadow:
                  'box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
              }}
            >
              <CardMedia
                sx={{
                  borderRadius: '1rem',
                  height: '45%',
                  Width: '100%',
                  objectFit: 'contain',
                  display: 'flex-wrap',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  px: '1rem',
                }}
                component="img"
                alt="img"
                image={
                  !detailInfo?.poster_path
                    ? none
                    : `https://image.tmdb.org/t/p/w500/${detailInfo?.poster_path}`
                }
              />{' '}
              <Divider className="divider" sx={{ mt: '1rem', width: '100%' }} />
              <Typography
                color="secondary"
                variant="h5"
                sx={{
                  wordWrap: 'break-word',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  lineClamp: 3,
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {title}
              </Typography>
              <Typography variant="h6" color="#007E6B" sx={{ mt: '0.8rem' }}>
                <span> Release date : </span> {release}
              </Typography>
              <Typography color="#882958" sx={{ mt: '0.5rem' }}>
                MediaType :{' '}
                {detailInfo.media_type === 'tv' ? 'Series' : 'Movie'}
              </Typography>
              <Typography color="#354954" sx={{ mt: '0.5rem' }}>
                <span style={{ color: '#32184b' }}> Genres : </span>
                {genre}
              </Typography>
              <Typography
                color="#354954"
                sx={{
                  mt: '0.4rem',
                  wordWrap: 'break-word',

                  textAlign: 'justify',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  lineClamp: 6,
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: 'vertical',
                }}
                variant="body1"
              >
                <Typography sx={{ color: '#32184b' }}> Overview : </Typography>

                {detailInfo?.overview
                  ? detailInfo.overview
                  : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita ipsa minima officia autem earum cum atque eius ducimus sed, modi aliquid recusandae obcaecati sint mollitia placeat eum ipsum. Dolore.'}
              </Typography>
              <Box sx={{ display: 'grid', mt: '1rem' }}>
                <div style={{ width: '100%' }}></div>
                <Rating
                  sx={{
                    alignItems: 'center',
                  }}
                  name="read-only"
                  value={detailInfo?.vote_average}
                  readOnly
                  max={10}
                  precision={0.5}
                ></Rating>{' '}
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    mb: '1rem',
                  }}
                >
                  <Avatar
                    sx={{
                      backgroundColor: '#FFD700',
                      width: 35,
                      height: 35,
                      mt: '0.8rem',
                    }}
                  >
                    <span style={{ color: '#000', padding: '0.2rem' }}>
                      {' '}
                      {detailInfo?.vote_average.toFixed(1)}
                    </span>
                  </Avatar>
                </Box>{' '}
              </Box>
            </Box>
          )}
        </Grid2>
      ) : (
        <>
          <Grid2 container xs={12} rowGap={10} sx={{ mb: '1rem' }}>
            {' '}
            {detailInfo ? (
              <Box
                onClick={detailSearch}
                sx={{
                  display: 'flex',
                  p: '0.5rem',
                  justifyContent: 'space-between',
                  height: '100%',
                  backgroundColor: '#fff',
                  borderRadius: '1em',
                  maxWidth: '100%',
                  boxShadow:
                    'box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
                }}
              >
                <Box>
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
                  <Divider
                    className="divider"
                    sx={{ mt: '0.2rem', width: '95%' }}
                  />
                  <Typography
                    variant="h6"
                    color="#007E6B"
                    sx={{ mt: '0.8rem' }}
                  >
                    <span> Release date : </span> {release}
                  </Typography>
                  <Typography color="#882958" sx={{ mt: '0.5rem' }}>
                    MediaType :{' '}
                    {detailInfo.media_type === 'tv' ? 'Series' : 'Movie'}
                  </Typography>
                  <Typography color="#354954" sx={{ mt: '0.5rem' }}>
                    <span style={{ color: '#32184b' }}> Genres : </span>
                    {genre}
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
                      width: '95%',
                    }}
                    variant="body1"
                  >
                    <Typography sx={{ color: '#32184b' }}>
                      {' '}
                      Overview :{' '}
                    </Typography>
                    {detailInfo?.overview
                      ? detailInfo.overview
                      : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita ipsa minima officia autem earum cum atque eius ducimus sed, modi aliquid recusandae obcaecati sint mollitia placeat eum ipsum. Dolore.'}
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
                  sx={{
                    borderRadius: '5px',
                    height: '100%',
                    maxWidth: '35%',
                  }}
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
            )}{' '}
          </Grid2>
        </>
      )}
    </>
  );
};

export default CardMovieDetails;

{
  /*
 <Grid2
        onClick={detailSearch}
        container
        xs={12}
        rowGap={10}
        sx={{ mb: '1rem', alignItems: 'center' }}
      >
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
          <Box maxWidth="60%">
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
            <Divider className="divider" sx={{ mt: '0.2rem', width: '95%' }} />
            <Typography variant="h6" color="#007E6B" sx={{ mt: '0.8rem' }}>
              <span> Release date : </span> {release}
            </Typography>
            <Typography color="#882958" sx={{ mt: '0.5rem' }}>
              MediaType : {detailInfo.media_type === 'tv' ? 'Series' : 'Movie'}
            </Typography>
            <Typography color="#354954" sx={{ mt: '0.5rem' }}>
              <span style={{ color: '#32184b' }}> Genres : </span>
              {genre}
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
                width: '95%',
              }}
              variant="body1"
            >
              <Typography sx={{ color: '#32184b' }}> Overview : </Typography>
              {detailInfo?.overview
                ? detailInfo.overview
                : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita ipsa minima officia autem earum cum atque eius ducimus sed, modi aliquid recusandae obcaecati sint mollitia placeat eum ipsum. Dolore.'}
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
            sx={{
              borderRadius: '5px',
              height: '100%',
              maxWidth: '40%',
            }}
            component="img"
            alt="img"
            image={
              !detailInfo?.poster_path
                ? none
                : `https://image.tmdb.org/t/p/w500/${detailInfo?.poster_path}`
            }
          />
        </Box>
      </Grid2>
 */
}
