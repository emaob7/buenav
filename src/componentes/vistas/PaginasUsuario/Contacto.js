import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { Grid, Paper, Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import mail from  "../../Imagenes/svg/mail2.svg"
import llamar from  "../../Imagenes/svg/llamar.svg"
import map from  "../../Imagenes/svg/map.svg"
import chat from  "../../Imagenes/svg/chat1.svg"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom";

const style = {

    paper2: {
        backgroundColor: "#fff",
        padding: "20px",
        minHeight: 500,
        
      },
      chips: {
        margin: "3px",
        padding: "3%",
        marginBottom: "10px",
        marginTop: "26px"
      
      },
      foto: {
        width: "100%",
        height: "100%",
        marginTop: "56px",
        marginLeft: "10px",

      },
};

export default class Contacto extends Component {
    render() {
        return (
            <div>
                
                 <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={3}>
          <Paper style={style.paper2}>
            <Typography variant="h5"  color="inherit">
              Tienes alguna duda o consulta? <br/>
              LLamanos a nuestra Linea fija <br/><Typography variant="h5"> (021) 338 2413</Typography>
            </Typography>
            
            <Button
            component="a" 
            href="tel:0213382413"
        variant="contained"
        color="primary"
        size="small"
        style={style.chips}
        startIcon={<PhoneIcon />}
      >
        Llamar
      </Button>
            
            
            <img src ={llamar} style={style.foto}/>
            
            </Paper >

          </Grid>
<Grid item xs={12} sm={6} md={3}>
<Paper style={style.paper2}>
<Typography variant="h5"  color="inherit">
              Quieres escribirnos un mail? <br/>
              Aquí te dejamos nuestro correo<br/> <Typography variant="h5">munibuena@gmail.com</Typography>
            </Typography>
            
            <Button
            component="a" 
            href="mailto:munibuena@gmail.com"
        variant="contained"
        color="primary"
        size="small"
        style={style.chips}
        startIcon={<AlternateEmailIcon />}
      >
        Enviar correo
      </Button>

          
          <img src ={mail} style={style.foto}/>
            </Paper>
</Grid>
<Grid item xs={12} sm={6} md={3}>
<Paper style={style.paper2}>
<Typography variant="h5"  color="inherit">
              Necesitas nuestra ubicación? <br/>
              Sencillo, ház click en el botón de abajo <br/> y listo!
            </Typography>
            
            <Button
            component={Link} button to="/ubicacioninformacion"
        variant="contained"
        color="primary"
        size="small"
        style={style.chips}
        startIcon={<LocationOnIcon />}
      >
        Ubicacion
      </Button>

          
          <img src ={map} style={style.foto}/>
            </Paper>
</Grid>
<Grid item xs={12} sm={6} md={3}>
<Paper style={style.paper2}>
<Typography variant="h5"  color="inherit">
              Toca el botón flotante de Whatsapp, en la esquina de abajo y dinos en que te ayudamos
            </Typography>
<div
  style={style.chips}

></div>
          
          <img src ={chat} style={style.foto}/>
            </Paper>
</Grid>
</Grid>         
            
            </div>
        )
    }
}
