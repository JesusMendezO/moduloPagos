import React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Search from 'components/Search';
import Footer from 'components/Footer';
import initialDetails from 'data/initialDetails';
import Container from '@mui/material/Container';
import NavBar from 'components/NavBar';
import clienteAxios from '../../config/clienteAxios'

function Receipt() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
const [datos, setDatos] = useState([])
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const pagos =clienteAxios.get('/usuarios/voluntario/')
  .then(function (response) {
    setDatos(response.data)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  console.log(datos);
  console.log(initialDetails)
   
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Box>
        <Search details={datos}/>
      </Box>
      <Footer />
    </Box> 
  );
}

export default Receipt;
