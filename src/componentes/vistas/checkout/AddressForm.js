import React, {Fragment, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Review from './Review';







const AddressForm = () => {
  
 

  let [estado, cambiarEstado] = useState({
      nom: "Chicho",
      ape: "Ortigoza",
      cin:"",
      nacio:"",
      fech:"",
      email: "",
      tel: "",
      dir:"",
      enl:"",
      foto: "",
    }
    
  );

  console.log(estado)


  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Ingrese sus datos personales
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="nombre"
            label="Nombre"
            fullWidth
            value={estado.nom}
            onChange ={e => cambiarEstado({nom: e.target.value})}
            
          />
          <Typography>
            {estado.nom}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellidos"
            fullWidth
            autoComplete="family-name"
            value={estado.ape}
            onChange={e => cambiarEstado({ape: e.target.value})}
          />
           <Typography >
           {estado.ape}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Profesion"
            fullWidth
            autoComplete="Licenciada en enfermeria"
            value={estado.prof}
            onChange={e => cambiarEstado({prof: e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="apellidos"
            name="apellidos"
            label="Nacionalidad"
            fullWidth
            autoComplete="Paraguaya"
            value={estado.nacion}
            onChange={e => cambiarEstado({nacion: e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Direccion"
            fullWidth
            autoComplete="Asuncion"
            value={estado.dir}
            onChange={e => cambiarEstado({dir: e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Enlace"
            fullWidth
            autoComplete="shipping postal-code"
            value={estado.enl}
            onChange={e => cambiarEstado({enl: e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />

        </Grid>
      </Grid>
      

    </Fragment>
  );
}
 
export default AddressForm;