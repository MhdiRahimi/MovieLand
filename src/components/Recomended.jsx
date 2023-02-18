import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Card, CardMedia, Tooltip, useMediaQuery } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import MovieCards from './MovieCards';
import CardMovieDetails from './CardMovieDetails';
import Titlemod from './Titlemod';
import Loading from './Loading';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const Recomended = ({ movie_id, mod }) => {
  const [detailInfo, setDetailInfo] = useState();

  const { data, refetch, isFetching } = useQuery(['recomend'], recomendedFetch);
  const matches = useMediaQuery('(min-width:600px)');
  async function recomendedFetch() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${mod}/${movie_id}/recommendations?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
    );
    return res.data;
  }
  useEffect(() => {
    refetch();
  }, [movie_id, mod]);

  if (isFetching) return <Loading />;
  // let movies = [];
  // for (let i = 0; i < 5 ; i++) {
  //   movies.push(data?.results[i]);
  // }
  const changeData = (info) => {
    setDetailInfo(info);
  };

  let numData = data?.results.length;
  console.log(numData);
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
        {' '}
        {data.results.length > 0 && (
          <Titlemod title={'Recommendations'} color={'#35185A'} />
        )}
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
              perPage: numData > 5 ? '5' : numData,
              perMove: '1',
              pagination: false,
              autoplay: true,
              pauseOnHover: true,
              pauseOnFocus: true,
              arrows: numData > 5 ? true : false,
              omitEnd: true,
              rewind: true,
              breakpoints: {
                640: {
                  perPage: '3',
                  perMove: '1',
                  pagination: false,
                  autoplay: true,
                  pauseOnHover: true,
                  pauseOnFocus: true,
                  arrows: false,
                  omitEnd: true,
                  rewind: true,
                  focus: 'center',
                  fixedWidth: 200,
                  fixedHeight: 300,
                },
                800: {
                  perPage: 4,
                  perMove: 1,
                  pagination: false,
                  autoplay: false,
                  pauseOnHover: true,
                  pauseOnFocus: true,
                  arrows: false,
                  omitEnd: false,
                  rewind: false,
                  type: 'loop',

                  focus: 'center',
                },
                480: {
                  perPage: 1,
                  perMove: 1,
                  pagination: false,
                  autoplay: false,
                  pauseOnHover: true,
                  pauseOnFocus: true,
                  arrows: false,
                  omitEnd: false,
                  rewind: false,
                  type: 'loop',
                  fixedWidth: 200,
                  fixedHeight: 300,
                  focus: 'center',
                },
              },
            }}
          >
            {data?.results?.map((trendMovie, i) => {
              return (
                <SplideSlide key={i} onClick={() => changeData(trendMovie)}>
                  <Tooltip
                    arrow
                    title={trendMovie?.title || trendMovie.name}
                    placement="top-start"
                    followCursor
                  >
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
                        height={matches ? '205' : '250'}
                        image={`https://image.tmdb.org/t/p/w300/${trendMovie?.poster_path}`}
                        width="135px"
                        alt="imgs"
                      />
                    </Card>
                  </Tooltip>
                </SplideSlide>
              );
            })}
          </Splide>
        </Box>
        {detailInfo && (
          <Grid2
            sx={{
              display: 'grid',
              
             
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '1em',
              width: '65%',
              boxShadow:
                'box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
            }}
          >
            <CardMovieDetails detailInfo={detailInfo} />
          </Grid2>
        )}
      </div>
    </>
  );
};

export default Recomended;
