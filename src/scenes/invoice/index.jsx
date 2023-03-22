import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import logo from 'assets/paluz-logo.png';
import line from 'assets/line-recibo.png'
import { Button, Divider } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

//********************* OBTENER FECHA DE EJECUCIÓN *********************

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

//**********************************************************************

const Invoice = () => {

  const items = JSON.parse(localStorage.getItem('datos'));
  const nav = useNavigate();

  const handleLinkClick = (event, message) => {
    if (message === 'receipt') {
      localStorage.removeItem("datos");

      nav("/receipt")
            
    }
    console.log('Link clickeado');
    console.log(event.currentTarget);
    console.log(message);
  };
  
  console.log(items[0].total)
  const print = () => window.print();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems:'flex-end'
      }}
    >
      <CssBaseline />
      <Box className="print-btn" display='flex' sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom:'0'}}>
      <Fab variant="extended" color="error"  onClick={handleOpen}>
        <CancelRoundedIcon sx={{ mr: 1 }} />
          Cancelar
      </Fab>
      <Fab variant="extended" color="success" onClick={print}>
        <LocalPrintshopRoundedIcon sx={{ mr: 1 }} />
          Imprimir
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" align='center' sx={{ mt: 2 }}>
            ¿Está seguro de cancelar esta operacion? 
          </Typography>
          <Divider sx={{ mt: 4 }}>
             </Divider>
             <Grid container sx={{ mt: 1}} spacing={2} justifyContent="flex-end" >
             <Grid item>
               <Button variant='contained' color='error' onClick={handleClose}> No </Button>
             </Grid>
             <Grid item>
               <Button variant='contained' sx={{ bgcolor:"teal" }} onClick={event => handleLinkClick(event, 'receipt')}>Si </Button>
             </Grid>
             </Grid>
        </Box>
      </Modal>
      </Box>
      <Container className='print' component="main" sx={{ mt: 3,  border: 1, borderRadius: 2 }} maxWidth="sm">
      <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
            <Box display="flex" 
              component="img"
              alt="logo"
              src={logo}
              height="50%"
              width="40%"
              alignSelf='flex-start'
            >
           </Box>
           <Box display="flex" 
              component="img"
              alt="line1"
              src={line}
              width="88%"
              sx={{ mt: 2 }} 
           >
           </Box>
          <Box sx={{ mt: 1 }}>
          <Typography sx={{ fontSize: 16, fontWeight:"bold"}}>
             <u> Recibo de incentivo  </u>
           </Typography>
          </Box>
          <Box  sx={{ mt: 2 }}> 
             <table class="center">
                <tr>
                 <th align="center"> Periodo de Incentivo </th>
                 <th align="center"> Fecha de ejecución </th>
                 <th align="center"> Número de recibo  </th>
                 <th align="center"> Monto </th>
               </tr>
               {items.map((x, i) => 
      <tr>
      <td align="center">{x.value}</td>
      <td align="center"> {x.fechaEj} </td>
      <td align="center">{x.numeroRecibo} </td>
      <td align="center">{x.monto}</td>
    </tr>
     
      )}
               
        </table>
          </Box>
          <Box sx={{ mt: 4, ml: 2, mr:2 }}>
            <Typography align='justify' sx={{ fontSize: 14 }}>
                 Se ha pagado la cantidad de ${items[(items.length-1)].total}, por el concepto de Incentivo 
                 a {items[(items.length-1)].nombre} a la cuenta personal Nombre del Banco de {items[(items.length-1)].titular} correspondiente 
                 al mes de {items[(items.length-1)].mes}, por actividades del <b> PROYECTO {items[(items.length-1)].proyecto} </b>
            </Typography>
          </Box>
          <Box sx={{ mt: 5, ml: 2 }} alignSelf='flex-start' >
            <Typography sx={{ fontSize: 14 }}>
              Recibe:
            </Typography>
          </Box>
            <Box sx={{ mt: 8 }} >
            <Typography sx={{ fontSize: 14 }}>
              {items[(items.length-1)].nombre}
            </Typography>
            </Box>
            <Box>
            <Typography sx={{ fontSize: 14 }}>
              C.I. {items[(items.length-1)].cedula}
            </Typography>
          </Box>
          <Box sx={{ mt: 5, ml: 2 }} alignSelf='flex-start'>
            <Typography sx={{ fontSize: 14 }}>
              Sin más que agregar, atentamente 
            </Typography>
          </Box>
          <Grid container sx={{ mt: 15}} spacing={1}>
             <Grid item xs={6}>
             <Box>
            <Typography align='center' sx={{ fontSize: 14,}}> 
              Maria Lourdes Reyes
            </Typography>
            <Typography align='center' sx={{ fontSize: 14 }}>
              Coordinador de Gestión Humana
            </Typography>
            </Box>
             </Grid>
             <Grid item xs={6}>
             <Box >
            <Typography align='center' sx={{ fontSize: 14 }}> 
              Emelyn Suárez
            </Typography>
            <Typography align='center' sx={{ fontSize: 14 }}>
              Coordinador de Finanzas  
            </Typography>
            </Box>
             </Grid>
          </Grid> 
        </Box>
        <Box component="footer" sx={{ py: 2, px: 2, mt: 'auto' }}>
           <Container maxWidth="sm">
           <Box display="flex" 
              component="img"
              alt="line2"
              src={line}
              width="100%"
              sx={{ mt: 9 }}
           >
           </Box>
           <Box sx={{ mb:2 }}>
          <Typography align='center' sx={{ fontSize: 11 }}>
              PALUZ RIF J-411561673
           </Typography>
          </Box>
           </Container>
        </Box>
      </Container>
    </Box>
  )
}

export default Invoice
