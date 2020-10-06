import React, { Component } from 'react';
import HomeIcon from "@material-ui/icons/Home";
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { Card,CardMedia, Container, Grid, Paper, Typography,Link, Breadcrumbs } from '@material-ui/core';
import organigrama from "../../../Imagenes/Organigrama/Organigrama.png"
import ListaInstitucion from "../../../Layout/Bar/listas/ListaInstitucion";

const style = {
  cardGrid: {
    paddingTop: 8,
    paddingBottom: 8
  },
  paper: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    minHeight: 650,
    marginTop:8
  },
      breadcrumbs:{
      backgroundColor: "#fafafa",
      marginTop:2,
      padding: "5px",
      color: "#fff"
    },
    icon:{
    marginRight: 0.5,
    width: 20,
    height: 20,
  },
  
  link: {
    display: "flex"
  },
  div:{
    marginBottom: 22,
    backgroundColor: "#0071bc",
    width : 80,
    height: 5,
  },
card: {
  height: "100%",
  display: "flex",
  flexDirection: "column"
},
cardMedia: {
      paddingTop: "70%",
      marginRight: 'auto',
    },
root: {
  maxWidth: 945,
},
cardMedia: {
  paddingTop: "70%",
  marginRight: 'auto',
},
}


export default class Organigrama extends Component {
    render() {
        return (
           
            <Container style={style.cardGrid}>
              <ListaInstitucion/>
      <Paper style={style.breadcrumbs}>
                <Grid item xs={12} sm={12}>
            <Breadcrumbs aria-label="breadcrumbs">
            <Link color="textSecondary" style={style.link} href="/" >
                                    <HomeIcon style={style.icon} />
                                     Municipalidad de Buena Vista 
                                </Link>
                                <Link color="inherit" style={style.link} href="/organigrama" >
                                    <AccountTreeIcon style={style.icon} />
                                     Organigrama 
                                </Link>
              
            </Breadcrumbs>
          </Grid>
          </Paper>
          <Paper style={style.paper}>
        <Typography  variant="h4"  color="textSecondary">
          ORGANIGRAMA DE LA INSTITUCION
        </Typography>
        <div style={style.div} ></div>
        <Grid container spacing={3}>
        <Grid item  xs={12} sm={4} md={8}>
        <Card style={style.root}>
        <CardMedia
        style={style.cardMedia}
          title="Organigrama"
          image={organigrama}
        />

        </Card>
        </Grid>
        </Grid>
          
                </Paper>

                </Container>
           
        )
    }
}
