import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box ,Modal} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import MovieCards from './MovieCards';
import CardMovieDetails from './CardMovieDetails';
import Titlemod from './Titlemod';

const Recomended = ({ movie_id , mod}) => {
  const [data, setData] = useState();
    const [open, setOpen] = useState(false);
    const [detailInfo, setDetailInfo] = useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
  const recomendedFetch = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${mod}/${movie_id}/recommendations?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
    );
    setData(res.data);
  };
  
  useEffect(() => {
      recomendedFetch();
    }, [movie_id]);
    
    let movies = [];
for (let i = 0; i < 5; i++) {
  movies.push(data?.results[i]);
}
  const changeData = (info) => {
    setDetailInfo(info);
    handleOpen();
  };
 
  return (
    <>
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          justifyItems: 'center',
          alignItems: 'center',
          alignContent: 'center',
          marginTop: '3rem',
        }}
      >
        <Titlemod title={'Recommendations'} color={'#35185A'} />
        <Box
          sx={{
            maxWidth: '55rem',
            flexWrap: 'nowrap',
            overflow: 'hidden',
            pt: '2rem',
            pb: '2rem',
            justifyContent: 'flex-center',
          }}
        >
          <Splide
            options={{
              pagination: false,
              perPage: '5',
              arrows: false,
            }}
          >
            {movies?.map((trendMovie,i) => {
              return (
                <SplideSlide
                  key={i}
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
export default Recomended;