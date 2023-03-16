import React from 'react'
import { Box, Container, Typography, Link } from '@mui/material'

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

const Footer = () => {
  return (
     <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto' }}>
     <Container maxWidth="sm">
       <Typography variant="body1">
           <Copyright />
       </Typography>
     </Container> 
     </Box>
  )
}

export default Footer




