import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { consumerFirebase } from "../../server";
import { Link } from "react-router-dom";

const style = {
  cardGrid: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  paper: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    minHeight: 650,
    marginTop: 8,
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

  gridTextfield: {
    marginTop: "20px",
    marginBottom: "-20px",
  },
  botones: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  cardContent: {
    flexGrow: 1,
    paddingTop: "2%",
    paddingBottom: "1%",
  },
  barraBoton: {
    marginTop: "20px",
  },
};

class NuevoCu extends Component {
  state = {
    datosps: [],
  };

  async componentDidMount() {
    let objectQuery = this.props.firebase.db.collection("Datosps");
    const snapshot = await objectQuery.get();
    const arrayDatops = snapshot.docs.map((doc) => {
      let data = doc.data();
      let id = doc.id;
      return { id, ...data };
    });
    this.setState({
      datosps: arrayDatops,
    });
  }

  eliminarDatosps = (id) => {
    this.props.firebase.db
      .collection("Datosps")
      .doc(id)
      .delete()
      .then((success) => {
        this.eliminarDatospsDeListaEstado(id);
      });
  };

  eliminarDatospsDeListaEstado = (id) => {
    const datospsListaNueva = this.state.datosps.filter(
      (datosps) => datosps.id !== id
    );
    this.setState({
      datosps: datospsListaNueva,
    });
  };

  editarCurriculum = (id) => {
    this.props.history.push("/datosp/nuevo/" + id);
  };

  render() {
    return (
      <Container style={style.cardGrid}>
        <Paper style={style.paper}>
          <Typography variant="h4" color="textSecondary">
            Curriculums
          </Typography>
          <div style={style.div}></div>

          <Button   style={style.botones}
                        variant="outlined"
                        size="small"
                        color="primary"
                        component={Link} button to="/step/nuevo/"
                        >Nuevo</Button>

          <Grid item xs={12} sm={12} style={style.gridTextfield}>
            <Grid container spacing={2}>
              {this.state.datosps.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Card style={style.card}>
                    <CardContent style={style.cardContent}>
                      <Typography gutterBottom variant="h6" component="h2">
                        {card.nom +
                          " - " +
                          card.ape}
                      </Typography>
                      <Typography gutterBottom variant="h9" component="h2">
                            {card.cin}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        style={style.botones}
                        to="chart"
                        target="_blank"
                        size="small"
                        variant="contained"
                        color="primary"
                        href={card.fotos}
                        startIcon={<PictureAsPdfIcon />}
                      >
                        Ver documento
                      </Button>
                      <Button
                        style={style.botones}
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => this.editarCurriculum(card.id)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        onClick={() => this.eliminarDatosps(card.id)}
                      >
                        Eliminar
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

export default consumerFirebase(NuevoCu);
