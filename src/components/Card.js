import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function CardComp({person}) {

    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

	return(
	<Card sx={{ minWidth: 275, mb: 2, mt: 2, }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 25, color: "black", mt: 1}} gutterBottom>
		      {person.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
		      {person.email}
        </Typography>
      </CardContent>
      <CardActions  sx={{ bgcolor: "lightgray" }}>
        <Button size="small" sx={{ color:"blue" }} onClick={handleOpenModal} > VER MÁS </Button>
         <Modal
            open={open}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
          <Box sx={style}>
             <Typography id="modal-modal-title" variant="h6" component="h2">
               {person.name}
             </Typography>
             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               {person.email}  
             </Typography>
             <Button variant='contained' sx={{ mt: 2 }} size="small" color='success'> Cancelar </Button>
             <Button variant='contained' sx={{ mt: 2 }} size="small"> Generar Recibo </Button>
          </Box>
         </Modal>
      </CardActions>
    </Card>
	);
}

export default CardComp;