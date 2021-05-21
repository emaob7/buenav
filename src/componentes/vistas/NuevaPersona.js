import React, { Component } from "react";
import {
  Container,

  Grid,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { consumerFirebase } from "../../server";
import { openMensajePantalla } from "../../sesion/actions/snackbarAction";
import ImageUploader from "react-images-upload";
import {v4 as uuidv4} from "uuid";
import LinearProgress from '@material-ui/core/LinearProgress';
import TableContainer from '@material-ui/core/TableContainer';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



class NuevaPersona extends Component {
  state = {
    persona: {
      nom: "",
      ape: "",
      prof: "",
      nacion: "",
      naci:"",
      dir:"",
      telf:"",
      email: "",
      link:"",      
      fotos: [],
      loading: false
    },
    archivos: []
  };

  entraDatoEnEstado = e => {
    let persona_ = Object.assign({}, this.state.persona);
    persona_[e.target.name] = e.target.value;
    this.setState({
      persona: persona_
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

  guardarPersona = () => {
    const { archivos, persona } = this.state;
    this.setState({ loading: true });
    setTimeout(() => {
        this.setState({ loading: false });
      }, 8000);
    //Crearle a cada image(archivo) un alias, ese alias es la referencia con la cual posteriormente lo invocaras
    //Ademas ese alias sera almacenado en la base de datos(firestore/firebase)

    Object.keys(archivos).forEach(function(key) {
      let valorDinamico = Math.floor(new Date().getTime() / 1000);
      let nom = archivos[key].name;
      let extension = nom.split(".").pop();
      archivos[key].alias = (
        nom.split(".")[0] +
        "_" +
        valorDinamico +
        "." +
        extension
      )
        .replace(/\s/g, "_")
        .toLowerCase();
    });



    this.props.firebase.guardarDocumentos(archivos).then(arregloUrls => {
      persona.fotos = arregloUrls;
      persona.propietario = this.props.firebase.auth.currentUser.uid;

      this.props.firebase.db
        .collection("Personas")
        .add(persona)
        .then(success => {
          this.props.history.push("/persona/eliminar");
        })
        .catch(error => {
          openMensajePantalla({
            open: true,
            mensaje: error
          });
        });
    
    
     });
  };

  eliminarFoto = nomFoto => () => {
    this.setState({
      archivos: this.state.archivos.filter(archivo => {
        return archivo.name !== nomFoto;
      })
    });
  };

  render() {
    let imagenKey = uuidv4();
    const { loading } = this.state;
    return (
      <React.Fragment>
      <Container>


              <ImageUploader
                key={imagenKey}
                withIcon={false}
                buttonText="Seleccione un archivo pdf"
                onChange={this.subirFotos}
                maxFileSize={5242880}
              /> 
                    <TableContainer>
                    <Table>
                    <TableBody>
                          {this.state.archivos.map((archivo, i) => (
                            <TableRow key={i}>
                     
                              <TableCell>
                                
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

                              </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
                </Table>
                </TableContainer>





               

                          
                      


                
                                <TextField
                                  name="prof"
                                  label="Año"
                                  variant="outlined"
                                  fullWidth
                                  onChange={this.entraDatoEnEstado}
                                  value={this.state.persona.prof}
                                />

<Button
                type="button"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
                startIcon={<SaveIcon />}
               
                onClick={this.guardarPersona}
              >
                Guardar y Publicar
              </Button>
              </Container>
      
      
      //pegado

      <Typography variant="h6" gutterBottom>
        Ingrese sus datos personales
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombre"
            name="nombre"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="apellidos"
            name="apellidos"
            label="Apellidos"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
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
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
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
    </React.Fragment>

    );
  }
}

export default consumerFirebase(NuevaPersona);