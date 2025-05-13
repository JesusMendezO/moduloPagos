import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../../node_modules/dayjs/locale/es';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { Language } from '@mui/icons-material';
import ReactDOM from "react-dom/client";
import Chip from '@mui/material/Chip';
import FormGroup from '@mui/material/FormGroup';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Grid } from '@mui/material';
//import Invoice from "scenes/invoice"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

// *************************************** PERIODOS DE PAGO *********************************************
var fechaActual = new Date();
var anioActual = fechaActual.getFullYear();
var anioAnterior = anioActual - 1;
var yearActual = anioActual.toString()
var year =  anioAnterior.toString()
var enero = new Date(new Date(new Date().setMonth(1)).setDate(-1)).getDate()+ '/01/' + yearActual ;
var febrero = new Date(new Date(new Date().setMonth(2)).setDate(0)).getDate()+ '/02/' + yearActual ;
var marzo = new Date(new Date(new Date().setMonth(3)).setDate(-1)).getDate()+ '/03/' + yearActual ;
var abril = new Date(new Date(new Date().setMonth(4)).setDate(0)).getDate()+ '/04/' + yearActual ;
var mayo = new Date(new Date(new Date().setMonth(5)).setDate(-1)).getDate()+ '/05/' + yearActual ;
var junio = new Date(new Date(new Date().setMonth(6)).setDate(0)).getDate()+ '/06/' + yearActual;
var julio = new Date(new Date(new Date().setMonth(7)).setDate(-1)).getDate()+ '/07/' + yearActual ;
var agosto = new Date(new Date(new Date().setMonth(8)).setDate(-1)).getDate()+ '/08/' + yearActual ;
var septiembre = new Date(new Date(new Date().setMonth(9)).setDate(0)).getDate()+ '/09/' + yearActual ;
var octubre = new Date(new Date(new Date().setMonth(10)).setDate(-1)).getDate()+ '/10/' + yearActual;
var noviembre = new Date(new Date(new Date().setMonth(11)).setDate(0)).getDate()+ '/11/' + yearActual;
var diciembre = new Date(new Date(new Date().setMonth(0)).setDate(-1)).getDate()+ '/12/' + year;

// *********************************************************************************************************
const list = [
  { value: enero.toString(), label: 'Enero ' + yearActual  },
  { value: febrero.toString(), label: 'Febrero ' + yearActual },
  { value: marzo.toString(), label: 'Marzo ' + yearActual  },
  { value: abril.toString(), label: 'Abril ' + yearActual  },
  { value: mayo.toString(), label: 'Mayo ' + yearActual  },
  { value: junio.toString(), label: 'Junio ' + yearActual }
];
const list1 = [
  { value: julio.toString(), label: 'Julio ' + yearActual  },
  { value: agosto.toString(), label: 'Agosto ' + yearActual },
  { value: septiembre.toString(), label: 'Septiembre ' + yearActual },
  { value: octubre.toString(), label: 'Octubre ' + yearActual },
  { value: noviembre.toString(), label: 'Noviembre ' + yearActual  },
  { value: diciembre.toString(), label: 'Dicimbre ' + year }
];
function CardComp({person}) {
  const nav = useNavigate();
  const [date, setDate] = useState(Date);
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
let sum = 0;
let monthName  = "";
let mes;
    const enviar = e => {
      for (let i = 0; i < lang.length ; i++) {
        sum = Number(person.incentivo)+sum
	      
         mes = Number(lang[i].slice(3, 5)-1);
	      console.log(lang[i])
	      console.log(lang[i].slice(3, 5))
	      console.log(mes)
	 const month = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
         const d = new Date(new Date(new Date().setMonth(mes)));
	 //const d = new Date(new Date().setMonth(mes));
         monthName =  monthName +", "+ month[mes] ;
	      
         l = [{ value: lang[i], nombre: person.nombre ,titular:person.titular, numeroRecibo: person.recibo , monto: person.incentivo,fechaEj:date , total: sum, mes: monthName, banco:person.banco, proyecto:person.proyecto, cargo:person.cargo,cedula:person.cedula }];
       
      vacio = vacio.concat(l)
    }
    localStorage.setItem('datos', JSON.stringify(vacio));

    nav("/invoice")
    }

      return(
   
      <Card sx={{ minWidth: 275, mb: 2, mt: 3, border: 1, borderRadius: 4}} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 25, color: "black", mt: 1}} gutterBottom>
		      {person.nombre}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
		      {person.cargo}
        </Typography>
      </CardContent>
      <CardActions  sx={{ bgcolor: "lightgray" }}>
        <Grid container justifyContent="flex-end" >
          <Grid item>
            <Button size="small" sx={{ color:"blue" }} onClick={handleOpenModal}> VER MÁS <KeyboardArrowRightIcon /> </Button>
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
               {person.nombre}
             </Typography>
             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               {person.cargo}  
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
                <Chip label="FECHA DE EJECUCIÓN" />
             </Divider>
             <Box container sx={{ mt: 3 }} alignContent='center'>
              <Box item xs={12} sx={{ ml: 5 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                <DatePicker 
                label="Seleccione una fecha"
                onChange={(date) => {
                  setDate(new Date(date).toLocaleDateString('es-ES'));
             ;
                }}
                />
             </LocalizationProvider>
              </Box>
             </Box>
             <Divider sx={{ mt:2 }}>
             </Divider>
             <Grid container sx={{ mt: 2,}} spacing={1} justifyContent="flex-end" >
             <Grid item>
               <Button variant='contained' color='error' sx={{ borderRadius:4 }} onClick={handleCloseModal}> Cancelar </Button>
             </Grid>
             <Grid item>
               <Button variant='contained' sx={{ bgcolor:"teal", borderRadius:4 }} onClick={enviar} > Generar Recibo </Button>
             </Grid>
             </Grid>
          </Box>
         </Modal>
      </CardActions>
    </Card>
   
      );
}

export default CardComp;
