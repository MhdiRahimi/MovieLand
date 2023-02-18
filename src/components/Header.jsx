import React, { useState } from 'react';
import { Stack, Button, ButtonGroup } from '@mui/material';
import Logo from '../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ main, setMain, gen }) => {
  const activeLink = `#57cc99 `;
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          zIndex: '100',
        }}
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
            sx={{ fontSize: '2rem', fontFamily: 'Mallanna', mt: '0.5rem' }}
          >
            <img src={Logo} alt="logo" width={40} height={40} />
            <span style={{ color: '#392f5a' }}>Fun</span>
            <span style={{ color: '#57cc99' }}>Movie</span>
          </Button>
        </NavLink>

        <Stack
          sx={{
            display: 'inline-flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            width: '80%',
            mt: '0.5rem',

            '& > *': {},
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
              <Button
                sx={{ textTransform: 'capitalize' }}
              
              >
                Category
              </Button>
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
      </div>
    </>
  );
};

export default Header;
