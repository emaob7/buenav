import React, { Component } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableRow,
  Avatar,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import { consumerFirebase } from "../../server";
import ImageUploader from "react-images-upload";
import { v4 as uuidv4 } from "uuid";

import LinearProgress from "@material-ui/core/LinearProgress";
import Papel from "../Children/Papel";

const style = {
  load: {
    backgroundColor: "#4dabf5",
  },

  icon: {
    marginRight: 0.5,
    width: 20,
    height: 20,
  },

  div: {
    marginBottom: 22,
    backgroundColor: "#0071bc",
    width: 80,
    height: 5,
  },

  avatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
};

class NuevoDatosp extends Component {
  state = {
    datosp: {
      nom: "",
      ape: "",
      prof: "",
      cin: "",
      nprof: "",
      naci: "",
      fena: "",
      dir: "",
      tel: "",
      email: "",

      fotos: [],
    },
    archivos: [],
    loading: false,
   
  };

  cambiarDato = e => {
    let datosp = Object.assign({}, this.state.datosp);
    datosp[e.target.name] = e.target.value;
    this.setState({datosp});
}

  subirImagenes = imagenes =>{
    const { datosp } = this.state;
    const {id} = this.props.match.params;

    //agregar un nombre dinamico por cada imagen que necesites subir al firestorage

    Object.keys(imagenes).forEach(key=>{
        let codigoDinamico = uuidv4();
        let nombreImagen = imagenes[key].name;
        let extension = nombreImagen.split(".").pop();
        imagenes[key].alias = (nombreImagen.split(".")[0]  + "_" + codigoDinamico + "." + extension ).replace(/\s/g,"_").toLowerCase();
    })

    this.props.firebase.guardarDocumentos(imagenes).then(urlImagenes => {
      datosp.fotos =  datosp.fotos.concat(urlImagenes);

        this.props.firebase.db
            .collection("Datosps")
            .doc(id)
            .set(datosp, {merge: true})
            .then(success =>{
                this.setState({
                  datosp 
                })
            })
    })
}

eliminarFoto = fotoUrl => async () =>{
    
    const {datosp} = this.state;
    const {id} = this.props.match.params;

    let fotoID = fotoUrl.match(/[\w-]+.(jpg|png|jepg|gif|svg)/);
    fotoID = fotoID[0];

    await this.props.firebase.eliminarDocumento(fotoID);

    let fotoList = this.state.datosp.fotos.filter(foto => {
        return foto !== fotoUrl;
    })

    datosp.fotos = fotoList;

    this.props.firebase.db
        .collection("Datosps")
        .doc(id)
        .set(datosp, {merge: true})
        .then(success => {
            this.setState({
              datosp
            })
        })
}

async componentDidMount() {
    const {id} = this.props.match.params;
    
    const datospCollection = this.props.firebase.db.collection("Datosps");
    const datospDB = await datospCollection.doc(id).get();

    this.setState({
      datosp : datospDB.data()
    })

}

guardarDatosp = () => {
    const {datosp} = this.state;
    const {id} = this.props.match.params;




    datosp.propietario = this.props.firebase.auth.currentUser.uid;
    
    

    this.props.firebase.db
        .collection("Datosps")
        .doc(id)
        .set(datosp, {merge: true})
        .then( success => {
            this.props.history.push("/objetivo/nuevo/" + id);
        })

}

  render() {
    let imagenKey = uuidv4();
    const { loading } = this.state;
    return (
      <Papel>
        <Typography variant="h6" gutterBottom>
          Información Personal
        </Typography>
        <div style={style.div}></div>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <ImageUploader
              key={imagenKey}
              withIcon={false}
              buttonText="Agregue su foto 4x3"
              onChange={this.subirImagenes}
              imgExtension={[".jpg", ".png", ".jpeg"]}
              maxFileSize={1242880}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Table>
              <TableBody>
                {this.state.datosp.fotos.map((foto, i) => (
                  <TableRow key={i}>
                    <Avatar src={foto} style={style.avatar} />
                    <Button
                      startIcon={<DeleteIcon />}
                      color="secondary"
                      size="small"
                      onClick={this.eliminarFoto(foto)}
                    >
                      Eliminar
                    </Button>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="nom"
              label="Nombre"
              variant="outlined"
              helperText="ej: Emmanuel"
              size="small"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.nom}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="ape"
              label="Apellidos"
              variant="outlined"
              helperText="ej: Ortigoza Bordón"
              size="small"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.ape}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="cin"
              label="Numero de cedula - DNI"
              variant="outlined"
              helperText="ej: 5310779"
              size="small"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.cin}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="fena"
              type="date"
              label="Fecha de Nacimiento"
              variant="outlined"
              size="small"
              helperText="ej: 24/01/1992"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.cambiarDato}
              value={this.state.datosp.fena}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              name="prof"
              label="Profesión"
              variant="outlined"
              helperText="ej: Ingeniero de Sistemas"
              size="small"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.prof}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="nprof"
              label="Número de Reg. profesional"
              variant="outlined"
              helperText="ej: 235.279"
              size="small"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.nprof}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="naci"
              label="Nacionalidad"
              variant="outlined"
              helperText="ej: Paraguaya"
              fullWidth
              size="small"
              onChange={this.cambiarDato}
              value={this.state.datosp.naci}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              name="dir"
              label="Dirección"
              variant="outlined"
              size="small"
              helperText="ej: Calle Santa Rosa de Lima/ Humaita"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.dir}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="tel"
              label="Telefono"
              variant="outlined"
              size="small"
              helperText="ej: +595981745130"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.tel}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="email"
              variant="outlined"
              label="Correo electrónico"
              size="small"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.email}
              helperText="ej: emanuel@gmail.com"
            />
            {loading && <LinearProgress style={style.load} />}
          </Grid>

          <Grid item xs={12} md={6}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              size="large"
              color="primary"
              startIcon={<SaveIcon />}
              style={style.submit}
              onClick={this.guardarDatosp}
            >
              Guardar y continuar
            </Button>
          </Grid>

        </Grid>
      </Papel>
    );
  }
}

export default consumerFirebase(NuevoDatosp);
