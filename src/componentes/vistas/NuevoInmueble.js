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
  TableCell,
} from "@material-ui/core";
import MuseumIcon from "@material-ui/icons/Museum";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import { consumerFirebase } from "../../server";
import { openMensajePantalla } from "../../sesion/actions/snackbarAction";
import ImageUploader from "react-images-upload";
import { v4 as uuidv4 } from "uuid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Papel from "../children/Papel";

const style = {
  container: {
    paddingTop: "8px",
  },
  load: {
    backgroundColor: "#4dabf5",
  },
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    backgroundColor: "#fafafa",
  },
  breadcrumbs: {
    backgroundColor: "#fafafa",
    marginTop: 2,
    padding: "5px",
    color: "#fff",
  },
  icon: {
    marginRight: 0.5,
    width: 20,
    height: 20,
  },
  link: {
    display: "flex",
  },
  div: {
    marginBottom: 22,
    backgroundColor: "#0071bc",
    width: 80,
    height: 5,
  },

  homeIcon: {
    width: 20,
    height: 20,
    marginRight: "4px",
  },
  submit: {
    marginTop: 15,
    marginBottom: 10,
  },
  foto: {
    height: "100px",
  },
};

class NuevoInmueble extends Component {
  state = {
    inmueble: {
      direccion: "",
      ciudad: "",
      pais: "",
      descripcion: "",

      fotos: [],
      loading: false,
    },
    archivos: [],
  };

  entraDatoEnEstado = (e) => {
    let inmueble_ = Object.assign({}, this.state.inmueble);
    inmueble_[e.target.name] = e.target.value;
    this.setState({
      inmueble: inmueble_,
    });
  };

  subirFotos = (documentos) => {
    Object.keys(documentos).forEach(function (key) {
      documentos[key].urlTemp = URL.createObjectURL(documentos[key]);
    });

    this.setState({
      archivos: this.state.archivos.concat(documentos),
    });
  };

  guardarInmueble = () => {
    const { archivos, inmueble } = this.state;
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 8000);
    //Crearle a cada image(archivo) un alias, ese alias es la referencia con la cual posteriormente lo invocaras
    //Ademas ese alias sera almacenado en la base de datos(firestore/firebase)

    Object.keys(archivos).forEach(function (key) {
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

    this.props.firebase.guardarDocumentos(archivos).then((arregloUrls) => {
      inmueble.fotos = arregloUrls;
      inmueble.propietario = this.props.firebase.auth.currentUser.uid;

      this.props.firebase.db
        .collection("Inmuebles")
        .add(inmueble)
        .then((success) => {
          this.props.history.push("/noticias/editar");
        })
        .catch((error) => {
          openMensajePantalla({
            open: true,
            mensaje: error,
          });
        });
    });
  };

  eliminarFoto = (nombreFoto) => () => {
    this.setState({
      archivos: this.state.archivos.filter((archivo) => {
        return archivo.name !== nombreFoto;
      }),
    });
  };

  render() {
    let imagenKey = uuidv4();
    const { loading } = this.state;
    return (
      <Container style={style.container}>
        
          
            
        <Grid container spacing={3}>
                <Papel>
                <Typography variant="h4" color="textSecondary">
                  AGREGAR NOTICIA
                </Typography>
                <div style={style.div}></div>
                <ImageUploader
                  key={imagenKey}
                  withIcon={false}
                  buttonText="Seleccione una imagen"
                  onChange={this.subirFotos}
                  imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
                  maxFileSize={5242880}
                />
             

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
           

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  name="ciudad"
                  label="Titulo Grande"
                  variant="outlined"
                  size="small"
                  multiline
                  rows={1}
                  fullWidth
                  onChange={this.entraDatoEnEstado}
                  value={this.state.inmueble.ciudad}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  name="direccion"
                  type="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.entraDatoEnEstado}
                  value={this.state.inmueble.direccion}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextField
                  name="pais"
                  label="Primer Parrafo"
                  variant="outlined"
                  size="small"
                  fullWidth
                  multiline
                  rows={2}
                  fullWidth
                  onChange={this.entraDatoEnEstado}
                  value={this.state.inmueble.pais}
                />
              </Grid>
            </Grid>


          <Grid item xs={12} md={12}>
            <TextField
              name="descripcion"
              label="Segundo parrafo y seguir"
              variant="outlined"
              size="small"
              multiline
              rows={10}
              fullWidth
              onChange={this.entraDatoEnEstado}
              value={this.state.inmueble.descripcion}
            />
            {loading && <LinearProgress style={style.load} />}
          </Grid>

          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={6} md={6}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
                style={style.submit}
                onClick={this.guardarInmueble}
              >
                Guardar y Publicar
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Button
                variant="contained"
                href="/"
                color="secondary"
                fullWidth
                style={style.submit}
                
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
          </Papel>
          </Grid>
      </Container>
    );
  }
}

export default consumerFirebase(NuevoInmueble);
