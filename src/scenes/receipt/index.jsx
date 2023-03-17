import React from 'react';
import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Search from 'components/Search';
import Footer from 'components/Footer';
import initialDetails from 'data/initialDetails';
import Container from '@mui/material/Container';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import clienteAxios from '../../config/clienteAxios'
function Receipt() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
const [datos, setDatos] = useState('')
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const pagos =clienteAxios.get('/usuarios/voluntario/')
  .then(function (response) {
    setDatos(response)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  
  console.log(datos);
  
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <AppBar position="fixed" sx={{ bgcolor:"teal" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Recibos de Pago
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <LogoutOutlined />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}> Cerrar Sesión </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      </Container>
      <Box>
        <Search details={initialDetails}/>
      </Box>
      <Footer />
    </Box> 
  );
}

export default Receipt;
