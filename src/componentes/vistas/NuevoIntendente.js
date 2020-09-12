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
import IconButton from '@material-ui/core/IconButton';
import MuseumIcon from '@material-ui/icons/Museum';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { consumerFirebase } from "../../server";
import { openMensajePantalla } from "../../sesion/actions/snackbarAction";
import ImageUploader from "react-images-upload";
import {v4 as uuidv4} from "uuid";
import { crearKeyword } from "../../sesion/actions/Keyword";

const style = {
  container: {
    paddingTop: "8px"
  },
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#fafafa"
  },
  link: {
    padding: "20px",
        backgroundColor: "#fafafa"
  },
  homeIcon: {
    width: 20,
    height: 20,
    marginRight: "4px"
  },
  submit: {
    marginTop: 15,
    marginBottom: 10
  },
  foto: {
    height: "100px"
  }
};

class NuevoIntendente extends Component {
  state = {
    intendente: {
      direccion: "",
      nombreIn: "",
      correoIn: "",
      municipio:"",
      descripcion: "",
      
      fotos: []
    },
    archivos: []
  };

  entraDatoEnEstado = e => {
    let intendente_ = Object.assign({}, this.state.intendente);
    intendente_[e.target.name] = e.target.value;
    this.setState({
        intendente: intendente_
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

  guardarIntendente = () => {
    const { archivos, intendente } = this.state;

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

    const textoBusqueda =
    intendente.direccion + " " + intendente.nombreIn + " " + intendente.correoIn;
    let keywords = crearKeyword(textoBusqueda);

    this.props.firebase.guardarDocumentos(archivos).then(arregloUrls => {
        intendente.fotos = arregloUrls;
        intendente.keywords = keywords;
        intendente.propietario = this.props.firebase.auth.currentUser.uid;

      this.props.firebase.db
        .collection("Intendentes")
        .add(intendente)
        .then(success => {
          this.props.history.push("/");
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

    return (
      <Container style={style.container}>
        <Paper style={style.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="textPrimary" style={style.link} href="/">
                  <MuseumIcon style={style.homeIcon} />
                  Municipalidad Buena Vista
                </Link>
                <Typography color="primary"> Agregar Nueva Noticia</Typography>
              </Breadcrumbs>
            </Grid>

            <Grid container justify="left">
            <Grid item xs={12} sm={6} md={4} >
              <ImageUploader
                key={imagenKey}
                withIcon={false}
                buttonText="Seleccione una imagen"
                onChange={this.subirFotos}
                imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
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
                        <img src={archivo.urlTemp} style={style.foto} />
                       
                      
                        <Button
                          
                          startIcon={<DeleteIcon />}
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
                name="nombreIn"
                label="Nombre del Intendente"
                variant="outlined"                              
                 multiline
                rows={1}
                fullWidth
                onChange={this.entraDatoEnEstado}
                value={this.state.intendente.nombreIn}
              />
            </Grid>
            

            <Grid item xs={12} md={6}>
              <TextField
                name="direccion"
                label="Direccion"
                variant="outlined"
                fullWidth
                onChange={this.entraDatoEnEstado}
                value={this.state.intendente.direccion}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="municipio"
                label="Intendente de Ciudad"
                variant="outlined"
                fullWidth
                onChange={this.entraDatoEnEstado}
                value={this.state.intendente.municipio}
              />
            </Grid>

                <Grid item xs={12} md={6}>
              <TextField
                name="correoIn"
                label="Correo"
                variant="outlined"
                fullWidth
                onChange={this.entraDatoEnEstado}
                value={this.state.intendente.correoIn}
              />
            </Grid>
            
    </Grid>
            <Grid  item xs={12} md={12}>
              <TextField
                name="descripcion"
                label="Descripcion"
                variant="outlined"
                multiline
                rows={10}
                fullWidth
                onChange={this.entraDatoEnEstado}
                value={this.state.intendente.descripcion}
              />
            </Grid>

           
          </Grid>

         
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={6}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
                startIcon={<SaveIcon />}
                style={style.submit}
                onClick={this.guardarIntendente}
              >
                Guardar y Publicar
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                        <Button href="/" color="secondary" fullWidth style={style.submit} size="large">Cancelar</Button>
                        </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default consumerFirebase(NuevoIntendente);