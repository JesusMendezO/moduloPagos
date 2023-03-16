import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from 'assets/paluz-logo.png';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {' © '}
        
        {new Date().getFullYear()}
        {' - '}
        <Link color="inherit" href="https://paluz.org/">
          PALUZ
        </Link>{' '}
      </Typography>
    );
  }

const theme = createTheme();

export default function Home() {

    const nav = useNavigate();

    const handleLinkClick = (event, message) => {
        if (message === 'receipt') {
          nav("/receipt")
          
        }else{
          nav("/export");
        }
    
        console.log('Link clickeado');
        console.log(event.currentTarget);
        console.log(message);
      };
      

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box display="flex" 
              component="img"
              alt="logo"
              src={logo}
              height="100%"
              width="100%"
           >
         </Box>
          <Box component="form" sx={{ mt: 6 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                 <Button fullWidth variant="contained" size="large" sx={{ bgcolor: 'teal' }} onClick={event => handleLinkClick(event, 'receipt')} > Recibos de Pago </Button>
              </Grid>
              <Grid item xs={12} sm={12}>
                 <Button fullWidth variant="contained" size="large" sx={{ bgcolor: 'teal' }} onClick={event => handleLinkClick(event, 'export')} > Cargar Excel </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}