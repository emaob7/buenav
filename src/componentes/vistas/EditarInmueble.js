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
    fotoInmueble: {
        height: "100px"
    }
}

class EditarInmueble extends Component {
    state = {
        inmueble : {
            direccion : "",
            ciudad: "",
            pais:"",
            descripcion:"", 
            fotos: []
        }
    }

     

    subirImagenes = imagenes =>{
        const { inmueble } = this.state;
        const {id} = this.props.match.params;

        //agregar un nombre dinamico por cada imagen que necesites subir al firestorage

        Object.keys(imagenes).forEach(key=>{
            let codigoDinamico = uuidv4();
            let nombreImagen = imagenes[key].name;
            let extension = nombreImagen.split(".").pop();
            imagenes[key].alias = (nombreImagen.split(".")[0]  + "_" + codigoDinamico + "." + extension ).replace(/\s/g,"_").toLowerCase();
        })

        this.props.firebase.guardarDocumentos(imagenes).then(urlImagenes => {
            inmueble.fotos =  inmueble.fotos.concat(urlImagenes);

            this.props.firebase.db
                .collection("Inmuebles")
                .doc(id)
                .set(inmueble, {merge: true})
                .then(success =>{
                    this.setState({
                       inmueble 
                    })
                })
        })
    }

    eliminarFoto = fotoUrl => async () =>{
        
        const {inmueble} = this.state;
        const {id} = this.props.match.params;

        let fotoID = fotoUrl.match(/[\w-]+.(jpg|png|jepg|gif|svg)/);
        fotoID = fotoID[0];

        await this.props.firebase.eliminarDocumento(fotoID);

        let fotoList = this.state.inmueble.fotos.filter(foto => {
            return foto !== fotoUrl;
        })

        inmueble.fotos = fotoList;

        this.props.firebase.db
            .collection("Inmuebles")
            .doc(id)
            .set(inmueble, {merge: true})
            .then(success => {
                this.setState({
                    inmueble
                })
            })
    }

    async componentDidMount() {
        const {id} = this.props.match.params;
        
        const inmuebleCollection = this.props.firebase.db.collection("Inmuebles");
        const inmuebleDB = await inmuebleCollection.doc(id).get();

        this.setState({
            inmueble : inmuebleDB.data()
        })

    }

    guardarInmueble = () => {
        const {inmueble} = this.state;
        const {id} = this.props.match.params;

        const textoBusqueda = inmueble.direccion + " " + inmueble.ciudad + " " + inmueble.pais;
        const keyWords = crearKeyword(textoBusqueda);

        inmueble.keywords = keyWords;
        inmueble.propietario = this.props.firebase.auth.currentUser.uid;

        this.props.firebase.db
            .collection("Inmuebles")
            .doc(id)
            .set(inmueble, {merge: true})
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
                                <Typography color="primary">Editar Inmueble</Typography>
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
                                        this.state.inmueble.fotos 
                                        ?this.state.inmueble.fotos.map((foto, i) =>(
                                            <TableRow key={i}>
                                                 <TableCell align="left">
                                                    <img src={foto} style={style.fotoInmueble} />
                                                
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
                                name="ciudad"
                                label="Titulo Grande"
                                variant="outlined"                              
                                 multiline
                                rows={1}
                                fullWidth
                                onChange={this.cambiarDato}
                                value={this.state.inmueble.ciudad}
                            />
                        </Grid>
                        
                        
                        <Grid item xs={8} sm={3}>
                            <TextField 
                                name="direccion"
                                label="Fecha de Publicación"
                                variant="outlined"
                               
                                onChange={this.cambiarDato}
                                value={this.state.inmueble.direccion}
                            />
                            </Grid>
                         <Grid item xs={12} sm={12}>
                            <TextField 
                                name="pais"
                                label="Primer parrafo"
                                variant="outlined"
                                multiline
                                rows={2}
                                fullWidth
                                onChange={this.cambiarDato}
                                value={this.state.inmueble.pais}
                              
                            />
                        </Grid>
                        </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField 
                                name="descripcion"
                                label="Segundo parrafo y seguir"
                                variant="outlined"
                                multiline
                                rows={10}
                                fullWidth
                                onChange={this.cambiarDato}
                                value={this.state.inmueble.descripcion}
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
                                onClick={this.guardarInmueble}
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

export default consumerFirebase(EditarInmueble);