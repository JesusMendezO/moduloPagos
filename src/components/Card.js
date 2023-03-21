import React, { useState,createContext  } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid } from '@mui/material';
import { Language } from '@mui/icons-material';
import ReactDOM from "react-dom/client";
//import Invoice from "scenes/invoice"
const UserContext = createContext()
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};
// *************************************** PERIODOS DE PAGO *********************************************

var year = new Date().getFullYear().toString()
var enero = new Date(new Date(new Date().setMonth(1)).setDate(0)).getDate()+ ' Enero de ' + year ;
var febrero = new Date(new Date(new Date().setMonth(2)).setDate(0)).getDate()+ ' Febero de ' + year ;
var marzo = new Date(new Date(new Date().setMonth(3)).setDate(0)).getDate()+ ' Marzo de ' + year ;
var abril = new Date(new Date(new Date().setMonth(4)).setDate(0)).getDate()+ ' Abril de ' + year ;
var mayo = new Date(new Date(new Date().setMonth(5)).setDate(0)).getDate()+ ' Mayo de ' + year ;
var junio = new Date(new Date(new Date().setMonth(6)).setDate(0)).getDate()+ ' Junio de ' + year ;
var julio = new Date(new Date(new Date().setMonth(7)).setDate(0)).getDate()+ ' Julio de ' + year ;
var agosto = new Date(new Date(new Date().setMonth(8)).setDate(0)).getDate()+ ' Agosto de ' + year ;
var septiembre = new Date(new Date(new Date().setMonth(9)).setDate(0)).getDate()+ ' Septiembre de ' + year ;
var octubre = new Date(new Date(new Date().setMonth(10)).setDate(0)).getDate()+ ' Octubre de ' + year ;
var noviembre = new Date(new Date(new Date().setMonth(11)).setDate(0)).getDate()+ ' Noviembre de ' + year ;
var diciembre = new Date(new Date(new Date().setMonth(12)).setDate(0)).getDate()+ ' Diciembre de ' + year ;

// *********************************************************************************************************
const list = [
  { value: enero.toString(), label: 'Enero ' + year  },
  { value: febrero.toString(), label: 'Febrero ' + year },
  { value: marzo.toString(), label: 'Marzo ' + year  },
  { value: abril.toString(), label: 'Abril ' + year  },
  { value: mayo.toString(), label: 'Mayo ' + year   },
  { value: junio.toString(), label: 'Junio ' + year }
];
const list1 = [
  { value: julio.toString(), label: 'Julio ' + year  },
  { value: agosto.toString(), label: 'Agosto ' + year },
  { value: septiembre.toString(), label: 'Septiembre ' + year  },
  { value: octubre.toString(), label: 'Octubre ' + year  },
  { value: noviembre.toString(), label: 'Noviembre ' + year   },
  { value: diciembre.toString(), label: 'Dicimbre ' + year }
];
function CardComp({person}) {
  const nav = useNavigate();

    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
    const [lang, setLang] = useState([]);
const [inf,setInf]=useState([]);
    const handleChange = e => {
      const { value, checked } = e.target;
      if (checked) {
        // push selected value in list
        setLang(prev => [...prev, value]);
      } else {
        // remove unchecked value from the list
        setLang(prev => prev.filter(x => x !== value));
      }
    }
let vacio =[];
let  l ;
    const enviar = e => {
      for (let i = 0; i < lang.length ; i++) {
        console.log(lang)
         l = [{ value: lang[i], nombre: person.nombre , numeroRecibo: person.cedula , monto: person.incentivo}];
       
      vacio = vacio.concat(l)
    }
    localStorage.setItem('datos', JSON.stringify(vacio));

    nav("/invoice")
    }

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
        <Grid container justifyContent="flex-end" >
          <Grid item>
            <Button size="small" sx={{ color:"blue" }} onClick={handleOpenModal}> VER MÁS </Button>
          </Grid>
        </Grid>
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
             <Divider sx={{ mt:2 }}>
                <Chip label="PERÍODO DE INCENTIVO" />
             </Divider>
             <Grid container sx={{ mt: 2,}} spacing={1} justifyContent="center" >
             <Grid item xs={6}>
             <FormGroup>
               {/* <FormControlLabel
                 control={
                 <Checkbox name="enero" />
                 }
                label={'Enero ' + year  }
                value={enero.toString()}
                sx={{ fontSize: 1.5 }}
              />
              <FormControlLabel
                 control={
                 <Checkbox name="febrero" />
                 }
                label={'Febrero ' + year  }
                value={febrero.toString()}
              />
              <FormControlLabel
                 control={
                 <Checkbox name="marzo" />
                 }
                label={'Marzo ' + year  }
                value={marzo.toString()}
              />
              <FormControlLabel
                 control={
                 <Checkbox name="abril" />
                 }
                label={'Abril ' + year  }
                value={abril.toString()}
              />
              <FormControlLabel
                 control={
                 <Checkbox name="mayo" />
                 }
                label={'Mayo ' + year  }
                value={mayo.toString()}
              />
              <FormControlLabel
                 control={
                 <Checkbox name="junio" />
                 }
                label={'Junio ' + year  }
                value={junio.toString()}
              /> */}
                 {list.map((x, i) => <label key={i}>
        <input
          type="checkbox"
          name="lang"
          value={x.value}
          onChange={handleChange}
        /> {x.label}
      </label>)}
              </FormGroup>
             </Grid>
             <Grid item xs={6}>
             <FormGroup>
               {/* <FormControlLabel
                 control={
                 <Checkbox name="julio" />
                 }
                label={'Julio ' + year  }
                value={julio.toString()}
              />
              <FormControlLabel
                 control={
                 <Checkbox name="agosto" />
                 }
                label={'Agosto ' + year  }
                value={agosto.toString()}
              />
              <FormControlLabel
                 control={
                 <Checkbox name="septiembre" />
                 }
                label={'Septiembre ' + year  }
                value={septiembre.toString()}
              />
              <FormControlLabel
                 control={
                 <Checkbox name="octubre" />
                 }
                label={'Octubre ' + year  }
                value={octubre.toString()}
              />
              <FormControlLabel
                 control={
                 <Checkbox name="noviembre" />
                 }
                label={'Noviembre ' + year  }
                value={noviembre.toString()}
              />
              <FormControlLabel
                 control={
                 <Checkbox name="diciembre" />
                 }
                label={'Diciembre ' + year  }
                value={diciembre.toString()}
              /> */}
         
      {list1.map((x, i) => <label key={i}>
        <input
          type="checkbox"
          name="lang"
          value={x.value}
          onChange={handleChange}
        /> {x.label}
      </label>)}
 
     
   
              </FormGroup>
             </Grid>
             </Grid>
             <Divider sx={{ mt:2 }}>
             </Divider>
             <Grid container sx={{ mt: 2,}} spacing={1} justifyContent="flex-end" >
             <Grid item>
               <Button variant='contained' color='error' onClick={handleCloseModal}> Cancelar </Button>
             </Grid>
             <Grid item>
               <Button variant='contained' sx={{ bgcolor:"teal" }} onClick={enviar} > Generar Recibo </Button>
             </Grid>
             </Grid>
          </Box>
         </Modal>
      </CardActions>
    </Card>
   
      );
}

export default CardComp;
