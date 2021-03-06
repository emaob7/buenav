import React, { Component } from "react";
import {
  Container,
  Paper,
  Grid,
  Breadcrumbs,
  Link,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import HomeIcon from "@material-ui/icons/Home";
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { consumerFirebase } from "../../server";
import { openMensajePantalla } from "../../sesion/actions/snackbarAction";
import ImageUploader from "react-images-upload";
import {v4 as uuidv4} from "uuid";
import LinearProgress from '@material-ui/core/LinearProgress';
import Papel from "../children/Papel";

const style = {
  container: {
    paddingTop: "8px"
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

  
  homeIcon: {
    width: 20,
    height: 20,
    marginRight: "4px"
  },
  submit: {
    marginTop: 35,
    marginBottom: 10
  },
  foto: {
    height: "100px"
  },
  input: {
    display: 'none',
  },
};

class NuevoFonacide extends Component {
  state = {
    fonacide: {
      mes: "",
      nombre: "",
      ano: "",
     
      
      fotos: [],
      loading: false
    },
    archivos: []
  };

  entraDatoEnEstado = e => {
    let fonacide_ = Object.assign({}, this.state.fonacide);
    fonacide_[e.target.name] = e.target.value;
    this.setState({
        fonacide: fonacide_
    });
  };

  subirFotos = documentos => {
    Object.keys(documentos).forEach(function(key) {
      documentos[key].urlTemp = URL.createObjectURL(documentos[key]);
    });

    this.setState({
      archivos: this.state.archivos.concat(documentos)
    });
  };

  guardarFonacide = () => {
    const { archivos, fonacide } = this.state;
    this.setState({ loading: true });
    setTimeout(() => {
        this.setState({ loading: false });
      }, 8000);
    //Crearle a cada image(archivo) un alias, ese alias es la referencia con la cual posteriormente lo invocaras
    //Ademas ese alias sera almacenado en la base de datos(firestore/firebase)

    Object.keys(archivos).forEach(function(key) {
      let valorDinamico = Math.floor(new Date().getTime() / 1000);
      let nombre = archivos[key].name;
      let extension = nombre.split(".").pop();
      archivos[key].alias = (
        nombre.split(".")[0] +
        "_" +
        valorDinamico +
        "." +
        extension
      )
        .replace(/\s/g, "_")
        .toLowerCase();
    });



    this.props.firebase.guardarDocumentos(archivos).then(arregloUrls => {
        fonacide.fotos = arregloUrls;
        fonacide.propietario = this.props.firebase.auth.currentUser.uid;

      this.props.firebase.db
        .collection("Fonacides")
        .add(fonacide)
        .then(success => {
          this.props.history.push("/fonacide/eliminar");
        })
        .catch(error => {
          openMensajePantalla({
            open: true,
            mensaje: error
          });
        });
    
    
     });
  };

  eliminarFoto = nombreFoto => () => {
    this.setState({
      archivos: this.state.archivos.filter(archivo => {
        return archivo.name !== nombreFoto;
      })
    });
  };

  render() {
    let imagenKey = uuidv4();
    const { loading } = this.state;
    return (
      <Container style={style.container}>
              <Paper style={style.breadcrumbs}>
                <Grid item xs={12} sm={12}>
            <Breadcrumbs aria-label="breadcrumbs">
            <Link color="textSecondary" style={style.link} href="/" >
                                    <HomeIcon style={style.icon} />
                                     Municipalidad de Buena Vista / 
                                </Link>
              
            </Breadcrumbs>
          </Grid>
      </Paper>
        <Papel>
          <Grid container spacing={3}>
          <Typography  variant="h4"  color="textSecondary">
          NUEVO FONACIDE
        </Typography>
       
        

            <Grid container justify="left">
            
            <Grid item xs={12} sm={6} md={4} >
            <div style={style.div} ></div>

              <ImageUploader
                key={imagenKey}
                withIcon={false}
                buttonText="Seleccione un archivo pdf"
                onChange={this.subirFotos}
                maxFileSize={5242880}
              />
            </Grid>
                        
                        <Grid item xs={12} sm={6}>
              <Table>
                <TableBody>
                  {this.state.archivos.map((archivo, i) => (
                    <TableRow key={i}>
                     
                      <TableCell align="left">
                        <Paper>
                        <link src={archivo.urlTemp}  />
                        <Button
                         color="primary"
                         startIcon={<PictureAsPdfIcon/>}
                            >
                            Archivo Pdf Agregado
                         </Button>
                       
                         <Button
                         variant="contained"
                          endIcon={<DeleteIcon />}
                          color="secondary"
                          size="small"
                          onClick={this.eliminarFoto(archivo.name)}
                        >
                          Eliminar
                        </Button>
                        </Paper>
                      </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </Grid>

          <Grid container spacing={3} >
          <Grid item xs={12} md={6}>
              <TextField
                name="nombre"
                label="Nombre de documento"
                variant="outlined"
                size="small"                              
                 multiline
                rows={1}
                fullWidth
                onChange={this.entraDatoEnEstado}
                value={this.state.fonacide.nombre}
              />
              {loading && (
            <LinearProgress style={style.load} />
          )}
            </Grid>

            <Grid item xs={12} md={3}>
              <TextField
                name="mes"
                label="Mes"
                variant="outlined"
                size="small"
                fullWidth
                onChange={this.entraDatoEnEstado}
                value={this.state.fonacide.mes}
              />
              {loading && (
            <LinearProgress style={style.load} />
          )}
            </Grid>

                <Grid item xs={12} md={3}>
              <TextField
                name="ano"
                label="Año"
                variant="outlined"
                size="small"
                fullWidth
                onChange={this.entraDatoEnEstado}
                value={this.state.fonacide.ano}
              />
              {loading && (
            <LinearProgress style={style.load} />
          )}
            </Grid>
    </Grid>
            

           
          </Grid>

         
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={6}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
                style={style.submit}
                onClick={this.guardarFonacide}
              >
                Guardar y Publicar
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                        <Button  variant="contained" href="/" color="secondary" fullWidth style={style.submit} >Cancelar</Button>
                        </Grid>
          </Grid>
          </Papel>
      </Container>
    );
  }
}

export default consumerFirebase(NuevoFonacide);