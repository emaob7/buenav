import React, { Component } from 'react';
import { consumerFirebase } from '../../server';
import { Paper, Container, Grid, Breadcrumbs, Link, Typography, TextField, Button, Table, TableRow, TableCell, TableBody } from '@material-ui/core';
import MuseumIcon from '@material-ui/icons/Museum';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {v4 as uuidv4} from "uuid";
import { crearKeyword } from '../../sesion/actions/Keyword';
const style={
    container: {
        paddingTop : "8px"
    },
    paper: {
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fafafa"
    },
    paper2: {
        padding: "20px",
        textAlign: 'center',
        color:'#0066ff',
      },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
      },
      cardMedia: {
        paddingTop: "56.25%",
        marginRight: 'auto',
      },
    root: {
        maxWidth: 745,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    link: {
        padding: "20px",
        backgroundColor: "#fafafa"
    },
    homeIcon:{
        width: 20,
        height:20,
        marginRight: "4px"
    },
    submit:{
        marginTop: 15,
        marginBottom:10
    },
    fotoInmueble: {
        height: "450px"
    }
}

class VerMasNoticias extends Component {
    state = {
        inmueble : {
            direccion : "",
            ciudad: "",
            pais:"",
            descripcion:"", 
            fotos: []
        }
    }




    async componentDidMount() {
        const {id} = this.props.match.params;
        
        const inmuebleCollection = this.props.firebase.db.collection("Inmuebles");
        const inmuebleDB = await inmuebleCollection.doc(id).get();

        this.setState({
            inmueble : inmuebleDB.data()
        })

    }

   

    render() {
        let uniqueID = uuidv4();

        return (
            <Container style={style.container}>
                <Paper style={style.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="textPrimary" style={style.link} href="/" >
                                    <MuseumIcon style={style.homeIcon} />
                                    Municipalidad Buena Vista
                                </Link>
                                <Typography color="primary">Noticias</Typography>
                            </Breadcrumbs>
                            </Grid>
                            </Grid>
                            
                                <Grid container spacing={4}>
                                
                                <Grid item  xs={12} sm={6} md={12}>
                                <Typography gutterBottom name="categoria">
                                {this.state.inmueble.pais}
                                </Typography>
         <Card style={style.root}>
         
                                
                                
                                {
                                        this.state.inmueble.fotos 
                                        ?this.state.inmueble.fotos.map((foto, i) =>(
                                            <CardMedia
                                            style={style.media}
                                            title="Contemplative Reptile"
                                            image={foto}
                                            />        
                                        ))
                                        :""
                                    }
                            <CardContent>
                            <Typography name="Titulo" variant="h4" >
                                {this.state.inmueble.ciudad}
                             </Typography>
                             <Typography variant="caption" name="Fecha">
                               Publicado {this.state.inmueble.direccion}
                            </Typography>
                             <br/>
                             <br/>
                         
                            <Typography variant="body1" name="descripcion">
                                {this.state.inmueble.descripcion}
                                </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small" variant="contained" color="primary" href="/">
                        Regresar a Pantalla Principal
                      </Button>
                                </CardActions>
    </Card>
    </Grid>
    </Grid>
                </Paper>
            </Container>
        );
    }
}

export default consumerFirebase(VerMasNoticias);