import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ListaTransparencia from "../../../Layout/Bar/listas/ListaTransparencia";
import {
  Container,
  Paper,
  Grid,
  Breadcrumbs,
  Link,
  Typography,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  FormHelperText,
  NativeSelect,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from '@material-ui/icons/Assignment';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { consumerFirebase } from "../../../../server";




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
     

  gridTextfield: {
    marginTop: "20px",
    marginBottom: "-20px"
  },
  botones: {
    marginRight: "15px",
    marginLeft: "15px"
  
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    
  },
  
  cardContent: {
    flexGrow: 1,
    paddingTop: "2%",
    paddingBottom: "1%"
  },
  barraBoton: {
    marginTop: "20px"
  },
  
};

class Royalties extends Component {
  state = {
    royaltis: [],
    age:"2020"
   

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
          let objectQuery = this.props.firebase.db
          .collection("Royaltis")
          .orderBy("mes")
          .where("ano","==", self.state.age);

          objectQuery.get().then(snapshot =>{
            const arrayRoyaltis = snapshot.docs.map(doc=>{
              let data = doc.data();
              let id = doc.id;
              return {id, ...data}
            })
            this.setState({
              royaltis: arrayRoyaltis
            })
          })
        
      
      
      }, 500)
    });
  };

  

    
   
  async componentDidMount() {
    let objectQuery = this.props.firebase.db.collection("Royaltis").where("ano", "==", this.state.age);
    const snapshot = await objectQuery.get();
    const arrayRoyaltis = snapshot.docs.map(doc => {
        let data = doc.data();
        let id = doc.id;
        return {id, ...data};
    })
    this.setState({
        royaltis:arrayRoyaltis
    })
}




  render() {
    return (
      <Container style={style.cardGrid}>
        <ListaTransparencia/>
      <Paper style={style.breadcrumbs}>
                <Grid item xs={12} sm={12}>
            <Breadcrumbs aria-label="breadcrumbs">
            <Link color="textSecondary" style={style.link} href="/" >
                                    <HomeIcon style={style.icon} />
                                     Municipalidad de Buena Vista 
                                </Link>
                                <Link color="inherit" style={style.link} href="/intendente" >
                                    <AssignmentIcon style={style.icon} />
                                     Royalties
                                </Link>
              
            </Breadcrumbs>
          </Grid>
      </Paper>
        <Paper style={style.paper}>

                 <Typography  variant="h4"  color="textSecondary">
          ROYALTIES - TESAKÃ
        </Typography>
        <div style={style.div} ></div>


        
        <Grid item xs={6} sm={6} md={2}>
            <Typography>Documentos del año</Typography>
            <FormControl>
              <InputLabel>Año</InputLabel>
              <NativeSelect
                name="age"
                onChange={this.cambiarBusquedaTexto}
                value={this.state.age}
              >
                <option value="">Elije el Año</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </NativeSelect>
              <FormHelperText>Seleccione el año</FormHelperText>
            </FormControl>
          </Grid>



          <Grid item xs={12} sm={12} style={style.gridTextfield}>
            <Grid container spacing={2}>
              {this.state.royaltis.map(card => (
                <Grid item key={card.id} xs={12} sm={12} md={12}>
                  <Card style={style.card}>
                    <CardContent style={style.cardContent}>
                      <Typography gutterBottom variant="h6" component="h2">
                        {card.nombre + " - " + card.mes + " - " + card.ano + "    "}
                     
                      <Button style={style.botones} to="chart" target="_blank" size="small" variant="contained" color="primary" href={(card.fotos)}  startIcon={<PictureAsPdfIcon/>} >
                        Ver documento
                      </Button>
                     
                      
                      </Typography>
                      </CardContent>
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

export default consumerFirebase(Royalties);