import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {
  Container,
  Paper,
  Grid,
  Typography,
  TextField,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  ButtonGroup
} from "@material-ui/core";
import { consumerFirebase } from "../../server";
import logo from "../../logo.svg";
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import AddIcon from "@material-ui/icons/Add";
import { obtenerData, obtenerDataAnterior } from "../../sesion/actions/InmuebleAction";
import { Link } from "react-router-dom";


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
   
     div:{
        marginBottom: 22,
        backgroundColor: "#0071bc",
        width : 80,
        height: 5,
      },

  gridTextfield: {
    marginTop: "20px",
    marginBottom: "-20px"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  barraBoton: {
    marginTop: "20px"
  },
  
};

class Noticias extends Component {
  state = {
    inmuebles: [],
    textoBusqueda: "",
    paginas: [],
    paginaSize: 10,
    casaInicial: null,
    paginaActual: 0
  };

  cambiarBusquedaTexto = e => {
    const self = this;
    self.setState({
      [e.target.name]: e.target.value
    });

    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }

    self.setState({
      name: e.target.value,
      typing: false,
      typingTimeout: setTimeout(goTime => {
          const firebase = this.props.firebase;
          const {paginaSize} = this.state;

          obtenerDataAnterior(firebase, paginaSize, 0, self.state.textoBusqueda).then(firebaseReturnData => {
            const pagina = {
              inicialValor : firebaseReturnData.inicialValor,
              finalValor : firebaseReturnData.finalValor
            }
            const paginas = [];
            paginas.push(pagina);

            this.setState({
              paginaActual : 0,
              paginas,
              inmuebles : firebaseReturnData.arrayInmuebles
            })

          })
        
      
      
      }, 500)
    });
  };

  anteriorPagina = () => {
    const {paginaActual, paginaSize, textoBusqueda, paginas} = this.state;
   
    if(paginaActual > 0) {
      const firebase = this.props.firebase;
       obtenerDataAnterior(firebase, paginaSize, paginas[paginaActual - 1].inicialValor, textoBusqueda).then(firebaseReturnData => {
        const pagina = {
          inicialValor : firebaseReturnData.inicialValor,
          finalValor : firebaseReturnData.finalValor
        }

        paginas.push(pagina);
      
        this.setState({
          paginas, 
          paginaActual : paginaActual - 1,
          inmuebles : firebaseReturnData.arrayInmuebles
        })

      })
    }


  }

  siguientePagina = () => {
    const {paginaActual,paginaSize, textoBusqueda, paginas, casaInicial } = this.state;
    const firebase = this.props.firebase;

    obtenerData(firebase, paginaSize,paginas[paginaActual].finalValor, textoBusqueda).then( firebaseReturnData => {

      if(firebaseReturnData.arrayInmuebles.length > 0){
        const pagina = {
          inicialValor :  firebaseReturnData.inicialValor,
          finalValor : firebaseReturnData.finalValor
        }

        paginas.push(pagina);
        this.setState({
          paginas,
          paginaActual : paginaActual + 1,
          inmuebles : firebaseReturnData.arrayInmuebles
        })
      }
    })
  }


  async componentDidMount() {

      const {paginaSize, textoBusqueda, casaInicial, paginas} = this.state;

      const firebase = this.props.firebase;

      const firebaseReturnData =  await obtenerDataAnterior(firebase, paginaSize, casaInicial, textoBusqueda);

      const pagina = {
        inicialValor : firebaseReturnData.inicialValor,
        finalValor : firebaseReturnData.finalValor
      }

      paginas.push(pagina);

      console.log(firebaseReturnData);

      this.setState({
        inmuebles : firebaseReturnData.arrayInmuebles,
        paginas,
        paginaActual : 0
      })

    
  }

  eliminarInmueble = id => {
    this.props.firebase.db
      .collection("Inmuebles")
      .doc(id)
      .delete()
      .then(success => {
        this.eliminarInmubleDeListaEstado(id);
      });
  };

  eliminarInmubleDeListaEstado = id => {
    const inmuebleListaNueva = this.state.inmuebles.filter(
      inmueble => inmueble.id !== id
    );
    this.setState({
      inmuebles: inmuebleListaNueva
    });
  };


  editarInmueble = id => {
    this.props.history.push("/inmueble/" + id);
  }

  verMas = id => {
    this.props.history.push("/VerMasNoticias/" + id);
  }
  render() {
    return (
      <Container style={style.cardGrid}>
      <Paper style={style.breadcrumbs}>
                <Grid item xs={12} sm={12}>

          </Grid>
      </Paper>
        <Paper style={style.paper}>

                 <Typography  variant="h4"  color="textSecondary">
          Obras y Actividades
        </Typography>
        <div style={style.div} ></div>

        <Grid item xs={12} sm={12} md={12}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<AddIcon />}
              component={Link}
              button
              to="/inmueble/nuevo"
            >
              Nuevo
            </Button>
          </Grid>

          <Grid item xs={12} sm={4} style={style.gridTextfield}>
            <TextField
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              name="textoBusqueda"
              variant="outlined"
              label="Buscar Noticias"
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
              {this.state.inmuebles.map(card => (
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
                      title="Mi Inmueble"
                    />

                    <CardContent style={style.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.ciudad}
                      </Typography>
                      <Typography gutterBottom variant="h7" >
                        {card.pais}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Button size="small" color="primary" onClick={() => this.editarInmueble(card.id)}>
                        Editar
                      </Button>
                      <Button size="small" color="primary" onClick={() => this.eliminarInmueble(card.id)}>
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

export default consumerFirebase(Noticias);
