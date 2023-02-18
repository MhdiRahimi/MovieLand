import Main from './components/Main';
import { createTheme, ThemeProvider } from '@mui/material';

import { Container } from '@mui/material';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
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
          <Container sx={{ height: '30vh' }}>
            <Header main={main} setMain={setMain} gen={gen} />
            <SearchBar pullData={pullData} />

            <Main
              main={main}
              query={query}
              gen={gen}
              setGen={setGen}
              mod={mod}
             
            />

            <div style={{ marginTop: '3rem' }}>
              <Footer />
            </div>
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
