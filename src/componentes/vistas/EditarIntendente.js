import React, { Component } from 'react';
import { consumerFirebase } from '../../server';
import { Paper, Container, Grid, Breadcrumbs, Link, Typography, TextField, Button, Table, TableRow, TableCell, TableBody } from '@material-ui/core';
import MuseumIcon from '@material-ui/icons/Museum';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import ImageUploader from 'react-images-upload';
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
        marginBottom:10,
       
    },
    fotoIntendente: {
        height: "100px"
    }
}

class EditarIntendente extends Component {
    state = {
        intendente : {
            direccion : "",
            nombreIn: "",
            correoIn:"",
            descripcion:"", 
            fotos: []
        }
    }

    cambiarDato = e => {
        let intendente = Object.assign({}, this.state.intendente);
        intendente[e.target.name] = e.target.value;
        this.setState({intendente});
    }

    subirImagenes = imagenes =>{
        const { intendente } = this.state;
        const {id} = this.props.match.params;

        //agregar un nombre dinamico por cada imagen que necesites subir al firestorage

        Object.keys(imagenes).forEach(key=>{
            let codigoDinamico = uuidv4();
            let nombreImagen = imagenes[key].name;
            let extension = nombreImagen.split(".").pop();
            imagenes[key].alias = (nombreImagen.split(".")[0]  + "_" + codigoDinamico + "." + extension ).replace(/\s/g,"_").toLowerCase();
        })

        this.props.firebase.guardarDocumentos(imagenes).then(urlImagenes => {
            intendente.fotos =  intendente.fotos.concat(urlImagenes);

            this.props.firebase.db
                .collection("Intendentes")
                .doc(id)
                .set(intendente, {merge: true})
                .then(success =>{
                    this.setState({
                        intendente 
                    })
                })
        })
    }

    eliminarFoto = fotoUrl => async () =>{
        
        const {intendente} = this.state;
        const {id} = this.props.match.params;

        let fotoID = fotoUrl.match(/[\w-]+.(jpg|png|jepg|gif|svg)/);
        fotoID = fotoID[0];

        await this.props.firebase.eliminarDocumento(fotoID);

        let fotoList = this.state.intendente.fotos.filter(foto => {
            return foto !== fotoUrl;
        })

        intendente.fotos = fotoList;

        this.props.firebase.db
            .collection("Intendentes")
            .doc(id)
            .set(intendente, {merge: true})
            .then(success => {
                this.setState({
                    intendente
                })
            })
    }

    async componentDidMount() {
        const {id} = this.props.match.params;
        
        const intendenteCollection = this.props.firebase.db.collection("Intendentes");
        const intendenteDB = await intendenteCollection.doc(id).get();

        this.setState({
            intendente : intendenteDB.data()
        })

    }

    guardarIntendente = () => {
        const {intendente} = this.state;
        const {id} = this.props.match.params;

        const textoBusqueda = intendente.direccion + " " + intendente.nombreIn + " " + intendente.correoIn;
        const keyWords = crearKeyword(textoBusqueda);

        intendente.keywords = keyWords;
        intendente.propietario = this.props.firebase.auth.currentUser.uid;

        this.props.firebase.db
            .collection("Intendentes")
            .doc(id)
            .set(intendente, {merge: true})
            .then( success => {
                this.props.history.push("/");
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
                                <Link color="inherit" style={style.link} href="/" >
                                    <MuseumIcon style={style.homeIcon} />
                                    Municipalidad Buena Vista
                                </Link>
                                <Typography color="primary">Editar Intendente</Typography>
                            </Breadcrumbs>

                            <Grid container justify="center">
                        <Grid item xs={12} sm={6}>
                            <ImageUploader 
                                key={uniqueID}
                                withIcon={false}
                                buttonText="Seleccione su imagen"
                                onChange={this.subirImagenes}
                                imgExtension={[".jpg",".gif",".png",".jpeg"]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Table>
                                <TableBody>
                                    {
                                        this.state.intendente.fotos 
                                        ?this.state.intendente.fotos.map((foto, i) =>(
                                            <TableRow key={i}>
                                                 <TableCell align="left">
                                                    <img src={foto} style={style.fotoIntendente} />
                                                
                                                    <Button
                                                        
                                                        startIcon={<DeleteIcon />}
                                                       
                                                        color="secondary"
                                                        size="small"
                                                        onClick={this.eliminarFoto(foto)}
                                                    >Eliminar imagen</Button>
                                                 </TableCell>
                                            </TableRow>            
                                        ))
                                        :""
                                    }
                                </TableBody>
                            </Table>
                        </Grid>

                    </Grid>
                    <Grid container spacing={3} >
                    <Grid item xs={12} sm={6}>
                            <TextField 
                                name="nombreIn"
                                label="Titulo Grande"
                                variant="outlined"                              
                                 multiline
                                rows={1}
                                fullWidth
                                onChange={this.cambiarDato}
                                value={this.state.intendente.nombreIn}
                            />
                        </Grid>
                        
                        
                        <Grid item xs={8} sm={3}>
                            <TextField 
                                name="direccion"
                                label="Fecha de Publicación"
                                variant="outlined"
                               
                                onChange={this.cambiarDato}
                                value={this.state.intendente.direccion}
                            />
                            </Grid>
                         <Grid item xs={8} sm={3}>
                            <TextField 
                                name="correoIn"
                                label="Categoria"
                                variant="outlined"
                                
                                onChange={this.cambiarDato}
                                value={this.state.intendente.correoIn}
                              
                            />
                        </Grid>
                        </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField 
                                name="descripcion"
                                label="Descripcion"
                                variant="outlined"
                                multiline
                                rows={10}
                                fullWidth
                                onChange={this.cambiarDato}
                                value={this.state.intendente.descripcion}
                            />
                        </Grid>
                    </Grid>

                   


                    <Grid container spacing={3} justify="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <Button
                                type="button"
                                variant="contained"
                                size="large"
                                color="primary"
                                fullWidth
                                style={style.submit}
                                startIcon={<SaveIcon />}
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

export default consumerFirebase(EditarIntendente);