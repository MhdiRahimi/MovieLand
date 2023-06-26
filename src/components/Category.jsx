import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import CardMovieDetails from './CardMovieDetails';
import Titlemod from './Titlemod';
import Paginationstyle from './Paginationstyle';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, useMediaQuery } from '@mui/material';
const Category = ({ gen }) => {
  const [value, setValue] = useState(0);
  const [genress, setGenress] = useState('movie');
  const [genresId, setGenresId] = useState();
  const matches = useMediaQuery('(min-width:900px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let navigate = useNavigate();

  const {
    data: categories,
    refetch: fetchAgain,
    isLoading: loading,
    isRefetching: fetching,
  } = useQuery(['categoryMovie'], fetchGenre);

  async function fetchGenre() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}`
    );
    return res?.data;
  }

  const {
    data: categoryTv,
    refetch: fetchAgain1,
    isLoading: loading1,
    isRefetching: fetching1,
  } = useQuery(['categorytv'], fetchGenre1);

  async function fetchGenre1() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_KEY}`
    );
    return res?.data;
  }

  let { genres } = useParams();

  function infoGenres(name, id) {
    navigate(`/category/items`, {
      state: {
        id: id,
        mod: 'movie',
        name: name,
      },
    });
    setGenress(name);
    setGenresId(id);
  }
  function infoGenres1(name, id) {
    navigate(`/category/items`, {
      state: {
        id: id,
        mod: 'tv',
        name: name,
      },
    });

    setGenress(name);
    setGenresId(id);
  }

  useEffect(() => {
    fetchGenre1();
    fetchGenre();
  }, []);

  useEffect(() => {
    setGenress('');
  }, [gen]);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ justifyContent: 'center', mx: 'auto' }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  if (fetching || loading) return <Loading />;

  return (
    <>
      <Box mt={1}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab label="Movie" {...a11yProps(0)} />
            <Tab label="Series" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container item rowSpacing={4} sx={{ my: '2rem' }}>
            {categories?.genres.map((cat) => (
              <Grid rowSpacing={4} xs={6}>
                <Box
                  className={'navlink_category'}
                  key={cat.id}
                  onClick={() => infoGenres(cat.name, cat.id)}
                >
                  {cat.name}
                </Box>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {' '}
          <Grid container item rowSpacing={4} sx={{ my: '2rem' }}>
            {categoryTv?.genres.map((cat) => (
              <Grid rowSpacing={4} xs={6}>
                <Box
                  className={'navlink_category'}
                  key={cat.id}
                  onClick={() => infoGenres1(cat.name, cat.id)}
                >
                  {cat.name}
                </Box>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Box>
    </>
  );
};

export default Category;
