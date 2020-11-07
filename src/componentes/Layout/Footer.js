import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import { Divider, Grid } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const style = {


    icon:{
    marginRight: 0.5,
    width: 20,
    height: 20,
  },
    link: {
    display: "flex"
  },
  container:{
    marginTop: 20
  },
  divider:{
    marginTop: 27
  }


  
};


function Copyright() {
  return (
    <div>
     
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Municipalidad de Buena Vista
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '30vh',
    marginTop: 50
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <footer className={classes.footer}>
 <Grid container spacing={2}>
     
      <Grid item xs={12} sm={4} md={4}>
                
     
      <Typography style={style.link}  variant="body1">
        Información
        </Typography>
      <Typography  variant="body2">
                                    <AccessTimeIcon style={style.icon} />
                                     Abierto: Lunes a viernes, 07:00 - 13:00 hs. 
                                </Typography>
                                <Link style={style.link} color="inherit" variant="body2" to="chart" target="_blank" href="mailto:munibuena@gmail.com">
                                    <AlternateEmailIcon style={style.icon} />
                                    munibuena@gmail.com 
                                </Link> 
           
                                <Link style={style.link} color="inherit" variant="body2"  href="tel:0213382413">
                                    <PhoneIcon style={style.icon} />
                                     Telefono: (021) 338 2413

                                </Link>
                             

      </Grid>
      <Grid item xs={12} sm={4} md={4}>
      <Typography style={style.link}  variant="body1">
        Redes Sociales
        </Typography>
      <Link style={style.link} color="inherit" variant="body2" to="chart" target="_blank" href="https://www.facebook.com/munibuena">
                                    <FacebookIcon  style={style.icon} />
                                     Facebook
                                </Link>
            <Link style={style.link} color="inherit"  variant="body2" to="chart" target="_blank" href="">
                                    <TwitterIcon style={style.icon} />
                                    Twitter
                                </Link> 
           
            <Link style={style.link} color="inherit" variant="body2" to="chart" target="_blank" href="">
                                    <InstagramIcon style={style.icon} />
                                     Instagram
                                </Link>
                             

      </Grid>
      <Grid item xs={12} sm={4} md={4}>
                
      <Typography style={style.link}  variant="body1">
                                    <LanguageIcon style={style.icon} />
                                    Página Web Oficial del Gobierno Municipal de Buena Vista

                                </Typography>
                                <Typography style={style.link}  variant="caption">
                                    
                                    Página Oficial del Gobierno Municipal de Buena Vista
Publicación de actividades oficiales, culturales, deportivos y sociales promovidas por la Municipalidad de Buena Vista. 

                                </Typography>
                             

      </Grid>
      </Grid>
      <Divider style={style.divider}/>
        <Container maxWidth="sm" style={style.container}>
          <Typography variant="body1">Desarrollado por Tesaka</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}