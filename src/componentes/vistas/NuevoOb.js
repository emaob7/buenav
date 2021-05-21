import React, { Component } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
//import CKEditor from 'ckeditor4-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { consumerFirebase } from "../../server";
import { openMensajePantalla } from "../../sesion/actions/snackbarAction";
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

class NuevoOb extends Component {
  state = {
    datosp: {
      obje: "",
    },

    loading: false,
  };

  cambiarDato = e => {
    let datosp = Object.assign({}, this.state.datosp);
    datosp[e.target.name] = e.target.value;
    this.setState({datosp});
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
          this.props.history.push("/experiencia/nuevo/" + id);
      })

}
  
  /*entraDatoEnEstado = (e) => {
    let objep_ = Object.assign({}, this.state.objep);
    objep_[e.target.name] = e.target.value;
    this.setState({
      objep: objep_,
    });
  };

  guardarObjep = () => {
    const objep = this.state;
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 8000);
    //Crearle a cada image(archivo) un alias, ese alias es la referencia con la cual posteriormente lo invocaras
    //Ademas ese alias sera almacenado en la base de datos(firestore/firebase)
    objep.propietario = this.props.firebase.auth.currentUser.uid;
    this.props.firebase.db
      .collection("Objeps")
      .add(objep)
      .then((success) => {
        this.props.history.push("/experiencia/nuevo");
      })
      .catch((error) => {
        openMensajePantalla({
          open: true,
          mensaje: error,
        });
      });
  };*/

  render() {
    const { loading } = this.state;
    return (
      <Papel>
        <Typography variant="h6" gutterBottom>
          Agregue su objetivo Profesional,o su interes en trabajar en la Empresa
        </Typography>
        <div style={style.div}></div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <TextField
              name="obje"
              label="Objetivo Profesional"
              variant="outlined"
              helperText="ej: Quiero trabajar en la Empresa para ayudar al excelente equipo y aprender de ellos"
              size="small"
              multiline
              rows={5}
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.obje}
            />
          </Grid>

          <Grid item xs={6} md={6}>
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

export default consumerFirebase(NuevoOb);
