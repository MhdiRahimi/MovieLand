import React, { useState, useEffect } from 'react';
import { Box, Modal } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MovieCards from './MovieCards';
import CardMovieDetails from './CardMovieDetails';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [detailInfo, setDetailInfo] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const changeData = (info) => {
    setDetailInfo(info);
    handleOpen();
  };

  const { data } = useQuery(['trendMovies'], async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_KEY}`
    );
    return res.data;
  });

  return (
    <>
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
  
          marginTop: '-4rem',
        }}
      >
        <Box
          sx={{
            maxWidth: '55rem',
            flexWrap: 'nowrap',
            overflow: 'hidden',
            pt: '7rem',
            pb: '2rem',
            justifyContent: 'flex-center',
          }}
        >
          <Splide
            options={{
              perPage: '5',
              perMove: '1',
              pagination: false,
              autoplay: true,
              pauseOnHover: true,
              pauseOnFocus: true,
              arrows: true,
              omitEnd: true,
              rewind: true,
            }}
          >
            {data?.results.map((trendMovie) => {
              return (
                <SplideSlide
                  key={trendMovie.id}
                  onClick={() => changeData(trendMovie)}
                >
                  <MovieCards trendMovie={trendMovie} />
                </SplideSlide>
              );
            })}
          </Splide>
        </Box>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMovieDetails detailInfo={detailInfo} />
        </Box>
      </Modal>
    </>
  );
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  borderRadius: '1rem',
};
export default Nav;
