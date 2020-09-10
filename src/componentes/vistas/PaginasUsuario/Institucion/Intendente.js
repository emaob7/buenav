import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {
  Container,
  Paper,
  Grid,
  Breadcrumbs,
  Link,
  Typography,
  TextField,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  ButtonGroup,
} from "@material-ui/core";
import MuseumIcon from '@material-ui/icons/Museum';
import { consumerFirebase } from "../../../../server";
import logo from "../../../../logo.svg";
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';





const style = {
  cardGrid: {
    paddingTop: 8,
    paddingBottom: 8
  },
  paper: {
    backgroundColor: "#fafafa",
    padding: "20px",
    minHeight: 650
  },
  paper2: {
    marginRight: "20px"
  
  },
  link: {
    display: "flex"
  },
  gridTextfield: {
    marginTop: "20px"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%",
    marginRight: 'auto',
  },
  cardContent: {
    flexGrow: 1
  },
  barraBoton: {
    marginTop: "20px",
    
  }
};

class Intendente extends Component {
  state = {
    intendente: [],
  };

  
          


        
      
      
  


  

  eliminarIntendente = id => {
    this.props.firebase.db
      .collection("Intendentes")
      .doc(id)
      .delete()
      .then(success => {
        this.eliminarIntendenteDeListaEstado(id);
      });
  };

  eliminarIntendenteDeListaEstado = id => {
    const intendenteListaNueva = this.state.intendentes.filter(
      intendente => intendente.id !== id
    );
    this.setState({
      intendentes: intendenteListaNueva
    });
  };


  editarIntendente = id => {
    this.props.history.push("/intendente/" + id);
  }

  verMas = id => {
    this.props.history.push("/VerIntendente/" + id);
  }
  render() {
    return (

      <Container style={style.cardGrid}>

      

        <Paper style={style.paper}>
          <Grid item xs={12} sm={12}>
            <Breadcrumbs aria-label="breadcrumbs">
              <Link color="primary" style={style.link} href="/">
                <MuseumIcon />
                Municipalidad Buena Vista /
              </Link>
              
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12} sm={6} style={style.gridTextfield}>
            <TextField
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              name="textoBusqueda"
              variant="outlined"
              label="Ingrese el Intendente a buscar"
              onChange={this.cambiarBusquedaTexto}
              value={this.state.textoBusqueda}
            />
          </Grid>

          <Grid item xs={12} sm={12} style={style.barraBoton}>
            <Grid container spacing={1} direction="column" alignItems="flex-end">
                <ButtonGroup size="small" aria-label="Small outlined group">
                    <Button onClick={this.anteriorPagina}>
                      <ArrowLeft />
                    </Button>
                    <Button onClick={this.siguientePagina}>
                      <ArrowRight />
                    </Button>
                </ButtonGroup>
            </Grid>
          </Grid>




          <Grid item xs={12} sm={12} style={style.gridTextfield}>
            <Grid container spacing={4}>
              {this.state.intendentes.map(card => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Card style={style.card}>
                    <CardMedia
                      style={style.cardMedia}
                      image={
                        card.fotos
                          ? card.fotos[0]
                            ? card.fotos[0]
                            : logo
                          : logo
                      }
                      title="Intendente"
                    />

                    <CardContent style={style.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.nombreIn + ", " + card.correoIn}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Button size="small" color="primary" onClick={() => this.editarIntendente(card.id)}>
                        Editar
                      </Button>
                      <Button size="small" color="primary" onClick={() => this.eliminarIntendente(card.id)}>
                        Eliminar
                      </Button>
                      <Button size="small" variant="contained" color="primary" onClick={() => this.verMas(card.id)}>
                        Ver más
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
        
      </Container>
    );
  }
}

export default consumerFirebase(Intendente);
