import Main from './components/Main';
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import Loading from './components/Loading';
import { Container } from '@mui/material';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import Nav from './components/Nav';
import React, { useState } from 'react';

function App() {
  const theme = createTheme({
    status: {
      main: '#ff4779',
    },
    palette: {
      primary: {
        main: '#57cc99',
      },
      secondary: {
        main: '#35185A',
      },
    },
  });

  const [main, setMain] = useState('Popular Movie');
  const [query, setQuery] = useState();
  const [mod, setmod] = useState('movie');
  const [gen, setGen] = useState('movie');

  const pullData = (data, mod) => {
    setQuery(data);
    setmod(mod);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="nav">
          <Container>
            <Header main={main} setMain={setMain} gen={gen} />
            <SearchBar pullData={pullData} />
          </Container>
        </div>
        <Main main={main} query={query} gen={gen} setGen={setGen} mod={mod} />
        {<Loading /> && (
          <div style={{ marginTop: '3rem', zIndex: '1' }}>
            <Footer />
          </div>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
