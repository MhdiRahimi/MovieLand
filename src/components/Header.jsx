import React, { useState } from 'react';
import {
  Stack,
  Button,
  ButtonGroup,
  useMediaQuery,
  SwipeableDrawer,
  Typography,
  Box,
} from '@mui/material';
import Logo from '../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { margin } from '@mui/system';

const Header = ({ main, setMain, gen }) => {
  const [active, setActive] = useState(false);

  const matches = useMediaQuery('(min-width:1200px)');
  const cssMob = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: '100',
    maxWidth: '100%',
    left: '0',
    right: '0',
    marginTop: '-4rem',
  };
  const activeLink = `#57cc99 `;

  const scrollDown = () => {
    window.scrollTo({
      top: '5000000000',
      behavior: 'smooth',
    });
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        style={
          !matches
            ? cssMob
            : {
                display: 'flex',
                justifyContent: 'space-between',
              }
        }
      >
        <NavLink
          to="/"
          style={{
            fontSize: '2rem',
            display: 'inline',

            textDecoration: 'none',
          }}
        >
          <Button
            sx={{
              fontSize: '2rem',
              fontFamily: 'Mallanna',
              mt: '0.5rem',

              '&.MuiButton-root': {
                color: '#dcdcdc',
              },
            }}
          >
            <img src={Logo} alt="logo" width={40} height={40} />
            <span style={{ color: '#57cc99' }}>Movie </span>
            <span style={{ color: '#392f5a',marginLeft:'0.3rem' }}> Land</span>
          </Button>
        </NavLink>

        {!matches ? (
          <>
            {!active && (
              <button
                style={{ float: 'right', marginTop: '0.5rem' }}
                onClick={() => setActive(!active)}
                className={`hamburger hamburger--spin ${
                  active ? 'is-active' : ''
                }`}
              >
                <span className="hamburger-box ">
                  <span className="hamburger-inner "></span>
                </span>
              </button>
            )}
            <SwipeableDrawer
              sx={{
                '.css-1160xiw-MuiPaper-root-MuiDrawer-paper': {
                  backgroundColor: '#35185A',
                },
              }}
              anchor="right"
              open={active}
              onClose={() => setActive(false)}
            >
              <button
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  paddingRight: '4rem',
                }}
                onClick={() => setActive(!active)}
                className={`hamburger hamburger--spin ${
                  active ? 'is-active' : ''
                }`}
              >
                <span className="hamburger-box ">
                  <span className="hamburger-inner "></span>
                </span>
              </button>
              <Grid2
                rowGap={1}
                container
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <ButtonGroup
                  sx={{ flexDirection: 'column', display: 'flex' }}
                  variant="none"
                  aria-label="outlined button group"
                  onClick={() => setActive(false)}
                >
                  <NavLink to="/contact" style={linkMob}>
                    <Button onClick={scrollDown} style={linkMob}>
                      Contact
                    </Button>
                  </NavLink>
                  <NavLink to={`category/${gen}`} style={linkMob}>
                    <Button style={linkMob}>Category</Button>
                  </NavLink>
                  <NavLink to="topseries" style={linkMob}>
                    <Button style={linkMob} onClick={() => setMain('tv')}>
                      Top Series
                    </Button>
                  </NavLink>
                  <NavLink to="topmovies" style={linkMob}>
                    <Button style={linkMob} onClick={() => setMain('movie')}>
                      Top Movies
                    </Button>
                  </NavLink>
                  <NavLink to="popularmovies" style={linkMob}>
                    <Button style={linkMob} onClick={() => setMain('movie')}>
                      Popular Movies
                    </Button>
                  </NavLink>
                  <NavLink to="popularseries" style={linkMob}>
                    <Button style={linkMob} onClick={() => setMain('tv')}>
                      Popular Series
                    </Button>{' '}
                  </NavLink>
                </ButtonGroup>
              </Grid2>
            </SwipeableDrawer>
          </>
        ) : (
          <Stack
            sx={{
              display: 'inline-flex',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              width: '80%',
              mt: '0.5rem',
            }}
          >
            <ButtonGroup variant="none" aria-label="outlined button group">
              <NavLink
                to="/contact"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: activeLink,
                        fontSize: '2rem',
                        display: 'inline',
                        mt: '1rem',

                        textDecoration: 'none',
                      }
                    : {
                        color: '#dcdcdc',
                        fontSize: '2rem',
                        display: 'inline',
                        mt: '1rem',
                        textDecoration: 'none',
                      }
                }
              >
                <Button
                  onClick={scrollDown}
                  sx={{
                    textTransform: 'capitalize',
                  }}
                >
                  Contact
                </Button>
              </NavLink>
              <NavLink
                to={`category/${gen}`}
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: activeLink,
                        fontSize: '2rem',
                        display: 'inline',
                        mt: '1rem',

                        textDecoration: 'none',
                      }
                    : {
                        color: '#dcdcdc',
                        fontSize: '2rem',
                        display: 'inline',
                        mt: '1rem',
                        textDecoration: 'none',
                      }
                }
              >
                <Button sx={{ textTransform: 'capitalize' }}>Category</Button>
              </NavLink>
              <NavLink
                to="topseries"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: activeLink,
                        fontSize: '2rem',
                        display: 'inline',
                        mt: '1rem',

                        textDecoration: 'none',
                      }
                    : {
                        color: '#dcdcdc',
                        fontSize: '2rem',
                        display: 'inline',
                        mt: '1rem',
                        textDecoration: 'none',
                      }
                }
              >
                <Button
                  sx={{ textTransform: 'capitalize' }}
                  onClick={() => setMain('tv')}
                >
                  Top Series
                </Button>
              </NavLink>
              <NavLink
                to="topmovies"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: activeLink,
                        fontSize: '2rem',
                        display: 'inline',
                        mt: '1rem',

                        textDecoration: 'none',
                      }
                    : {
                        color: '#dcdcdc',
                        fontSize: '2rem',
                        display: 'inline',
                        mt: '1rem',
                        textDecoration: 'none',
                      }
                }
              >
                <Button
                  sx={{ textTransform: 'capitalize' }}
                  onClick={() => setMain('movie')}
                >
                  Top Movies
                </Button>
              </NavLink>
              <NavLink
                to="popularmovies"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: activeLink,
                        fontSize: '2rem',
                        display: 'inline',
                        mt: '1rem',

                        textDecoration: 'none',
                      }
                    : {
                        color: '#dcdcdc',
                        fontSize: '2rem',
                        display: 'inline',
                        mt: '1rem',
                        textDecoration: 'none',
                      }
                }
              >
                <Button
                  sx={{ textTransform: 'capitalize' }}
                  onClick={() => setMain('movie')}
                >
                  Popular Movies
                </Button>
              </NavLink>
              <NavLink
                to="popularseries"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: activeLink,
                        fontSize: '2rem',
                        display: 'inline',
                        mt: '1rem',

                        textDecoration: 'none',
                      }
                    : {
                        color: '#dcdcdc',
                        fontSize: '2rem',
                        display: 'inline',
                        mt: '1rem',
                        textDecoration: 'none',
                      }
                }
              >
                <Button
                  sx={{ textTransform: 'capitalize' }}
                  onClick={() => setMain('tv')}
                >
                  Popular Series
                </Button>{' '}
              </NavLink>
            </ButtonGroup>
          </Stack>
        )}
      </motion.div>
    </>
  );
};

export default Header;

const linkMob = {
  color: '#57cc99',

  textDecoration: 'none',
  display: 'grid',
  padding: '1rem',
  textTransform: 'capitalize',
};

// style={({ isActive }) =>
//                     isActive
//                       ? {
//                           color: activeLink,
//                           fontSize: '2rem',

//                           textDecoration: 'none',
//                         }
//                       : {
//                           color: '#dcdcdc',
//                           fontSize: '2rem',

//                           mt: '1rem',
//                           textDecoration: 'none',
//                         }
//                   }
