import {
  CardMedia,
  Typography,
  Box,
  Divider,
  Rating,
  Avatar,
  useMediaQuery,
} from '@mui/material';

import Genres from './Genres';
import GenresTv from './GenresTv';
import { motion } from 'framer-motion';
import none from '../assets/none.jpg';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Loading from './Loading';
const CardMovieDetails = ({ detailInfo }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const fold = useMediaQuery('(min-width:300px)');
  let title, release;

  if (detailInfo?.title) {
    title = detailInfo?.title;
    release = detailInfo?.release_date;
  } else {
    title = detailInfo?.name;
    release = detailInfo?.first_air_date;
  }

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,

      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

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
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              style={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'grid',
              }}
            >
              <Box
                component={motion.div}
                variants={cardVariants}
                sx={{
                  display: 'grid',
                  p: '0.5rem',

                  backgroundColor: '#fff',
                  borderRadius: '1em',
                  width: '100%',
                  boxShadow:
                    'box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
                }}
              >
                <CardMedia
                  sx={
                    !fold
                      ? {
                          borderRadius: '1rem',
                          height: '95%',
                          Width: '100%',
                          objectFit: 'contain',
                          display: 'grid',
                          justifyContent: 'center',
                          alignContent: 'center',
                          alignItems: 'center',
                          px: '1rem',
                        }
                      : {
                          objectFit: 'contain',
                        }
                  }
                  component="img"
                  alt="img"
                  image={
                    !detailInfo?.poster_path
                      ? none
                      : `https://image.tmdb.org/t/p/w500/${detailInfo?.poster_path}`
                  }
                />{' '}
                <Divider
                  className="divider"
                  sx={{ mt: '1rem', width: '100%' }}
                />
                <Box sx={!fold ? { mt: '1rem', ml: '0.8rem' } : { mt: '1rem' }}>
                  <Typography
                    color="secondary"
                    variant="h5"
                    sx={{
                      wordWrap: 'break-word',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      lineClamp: 1,
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {title}
                  </Typography>

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
                      mt: '0.4rem',
                      wordWrap: 'break-word',
                      maxHeight: '3rem',
                      textAlign: 'justify',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      lineClamp: 2,
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
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
              </Box>
            </motion.div>
          )}
        </Grid2>
      ) : (
        <>
          <Grid2 container xs={12} rowGap={10} sx={{ mb: '1rem' }}>
            {' '}
            {detailInfo ? (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                style={{
                  alignContent: 'center ',
                  alignItems: 'center ',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <Box
                  component={motion.div}
                  variants={cardVariants}
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
              </motion.div>
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
