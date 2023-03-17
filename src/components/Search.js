import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import { OutlinedInput, InputLabel, FormControl } from '@mui/material';
import SearchIcon from '@mui/icons-material/SearchRounded';
import logo from 'assets/paluz-logo.png';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .nombre
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
  	if (searchShow) {
	  	return (
	  		<Scroll>
	  			<SearchList filteredPersons={filteredPersons} />
	  		</Scroll>
	  	);
	  }
  }

  return (
     
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8 }} maxWidth="xs">
      <Box
          sx={{
            marginTop: 15,
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
          <Typography sx={{ mt: 4 }}>
            Ingrese la cédula de identidad del voluntario
          </Typography>
          <Box component="form" sx={{ mt: 5 }}>
          <Grid container spacing={2}> 
            <Grid item xs={12} sm={12}>
              <FormControl variant="outlined">
                <InputLabel htmlFor="buscar-input"> Buscar Voluntario </InputLabel>
                <OutlinedInput sx={{ width: 500}}
                  id="buscar-input"
                  type="search"
                  fullWidth
                  label="Buscar Voluntario"
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon/>
                    </InputAdornment>
                  }
                  onChange = {handleChange} 
                />
              </FormControl>
            </Grid>
          </Grid>
          </Box>
        </Box>
        {searchList()}
      </Container>
    </Box>
    

  );
}

export default Search;
