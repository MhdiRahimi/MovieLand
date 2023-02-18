import React from 'react';
import {
  IconButton,
  Container,
  Typography,
  Tooltip,
  Box,
  Link,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container
          sx={{
            display: 'grid',

            mt: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',

              justifyContent: 'center',
              justifySelf: 'center',
              alignItems: 'center',
            }}
          >
            <Tooltip title="whatsapp" arrow placement="top">
              <IconButton
                size="small"
                sx={{
                  '&.MuiIconButton-root': {
                    padding: '1rem',
                    mt: '1rem',
                  },
                }}
              >
                <WhatsAppIcon
                  fontSize="medium"
                  sx={{
                    m: '0rem',
                    cursor: 'pointer',
                    color: '#4FCE5D',
                    '&.MuiSvgIcon-root:hover': {
                      scale: '1.3',
                      transition: 'all ease 0.4s',
                    },
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="email" arrow placement="top">
              <IconButton
                size="small"
                sx={{
                  '&.MuiIconButton-root': {
                    padding: '0.8rem',
                    mt: '1rem',
                  },
                }}
              >
                <EmailIcon
                  fontSize="medium"
                  sx={{
                    m: '0rem',
                    cursor: 'pointer',
                    color: ' #BB001B',
                    '&.MuiSvgIcon-root:hover': {
                      scale: '1.3',
                      transition: 'all ease 0.4s',
                    },
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="telegram" arrow placement="top">
              <IconButton
                size="small"
                sx={{
                  '&.MuiIconButton-root': {
                    padding: '0.8rem',
                    mt: '1rem',
                  },
                }}
              >
                <TelegramIcon
                  fontSize="medium"
                  sx={{
                    m: '0rem',
                    cursor: 'pointer',
                    color: '#0088CC',
                    '&.MuiSvgIcon-root:hover': {
                      scale: '1.3',
                      transition: 'all ease 0.4s',
                    },
                  }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="instagram" arrow placement="top">
              <IconButton
                size="small"
                sx={{
                  '&.MuiIconButton-root': {
                    padding: '0.8rem',
                    mt: '1rem',
                  },
                }}
              >
                <InstagramIcon
                  fontSize="medium"
                  sx={{
                    m: '0rem',
                    cursor: 'pointer',
                    color: '#E1306C',
                    '&.MuiSvgIcon-root:hover': {
                      scale: '1.3',
                      transition: 'all ease 0.4s',
                    },
                  }}
                />
              </IconButton>
            </Tooltip>
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: '2.2rem',
              width: '100%',
              justifyContent: 'center',
              justifySelf: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{ color: '#ff4779', fontStyle: 'italic', mx: '0.8rem' }}
            >
              Fun <span style={{ color: '#57cc99' }}>Movies</span>
            </Typography>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
