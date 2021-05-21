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
};

class NuevaExp extends Component {
  state = {
    expe: {
       puest: "",
      empre: "",
      ubi: "",
      desd: "",
      hast: "",
      tare: "",
    },

    loading: false,
  };

  entraDatoEnEstado = (e) => {
    let expe_ = Object.assign({}, this.state.expe);
    expe_[e.target.name] = e.target.value;
    this.setState({
      expe: expe_,
    });
  };

  guardarExpe = () => {
    const expe = this.state;
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 8000);
    //Crearle a cada image(archivo) un alias, ese alias es la referencia con la cual posteriormente lo invocaras
    //Ademas ese alias sera almacenado en la base de datos(firestore/firebase)
    this.props.firebase.db
      .collection("Datosp")
     // .doc(id)
      .add(expe)
      .then((success) => {
        this.props.history.push("/");
      })
      .catch((error) => {
        openMensajePantalla({
          open: true,
          mensaje: error,
        });
      });
  };

  render() {
 //   const { loading } = this.state;
    return (
      <Papel>
        <Typography variant="h6" gutterBottom>
          Vamos a Agregar tu experiencias
        </Typography>
        <div style={style.div}></div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              name="puest"
              label="Puesto"
              variant="outlined"
              helperText="ej: Secretario General"
              size="small"
              fullWidth
              onChange={this.entraDatoEnEstado}
              value={this.state.expe.puest}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="empre"
              label="Nombre de la Empresa - Institución"
              variant="outlined"
              helperText="ej: Banco Nacional de Fomento"
              size="small"
              fullWidth
              onChange={this.entraDatoEnEstado}
              value={this.state.expe.empre}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              name="ubi"
              label="Ubicación de la Empresa - Institución"
              variant="outlined"
              helperText="ej: Buena Vista, Calle Eusebio Ayala"
              size="small"
              fullWidth
              onChange={this.entraDatoEnEstado}
              value={this.state.expe.ubi}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="desd"
              label="Desde fecha"
              variant="outlined"
              helperText="ej: 01-01-2010"
              size="small"
              fullWidth
              onChange={this.entraDatoEnEstado}
              value={this.state.expe.desd}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="hast"
              label="Hasta fecha"
              variant="outlined"
              helperText="ej: 03-05-2019"
              size="small"
              fullWidth
              onChange={this.entraDatoEnEstado}
              value={this.state.expe.hast}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              name="tare"
              label="Tareas que realizo"
              variant="outlined"
              helperText="ej: Atencion al cliente, carga de productos, arqueo de caja"
              size="small"
              multiline
              rows={5}
              fullWidth
              onChange={this.entraDatoEnEstado}
              value={this.state.expe.tare}
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
              onClick={this.guardarExpe}
            >
              Guardar y continuar
            </Button>
          </Grid>
        </Grid>
      </Papel>
    );
  }
}

export default consumerFirebase(NuevaExp);
