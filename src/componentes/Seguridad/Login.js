import React, { Component } from 'react';
import { Container, Avatar, Typography, TextField, Button,Paper } from '@material-ui/core';
import LockOutlineIcon from "@material-ui/icons/LockOutlined";
import { compose } from 'recompose';
import { consumerFirebase } from '../../server';
import  {iniciarSesion} from '../../sesion/actions/sesionAction';
import {openMensajePantalla} from '../../sesion/actions/snackbarAction';
import LinearProgress from '@material-ui/core/LinearProgress';

import {StateContext } from '../../sesion/store';

const style={
    paper: {
        marginTop: 15,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        backgroundColor: "#fff"
      },
    avatar: {
        margin: 5,
        backgroundColor: "red"
    },
    form: {
        width: "100%",
        marginTop: 8
    },
    submit: {
        marginTop: 10,
        marginBottom: 20
    },
    load:{
        backgroundColor: "#4dabf5"
    }

    
}


class Login extends Component {
    static contextType = StateContext;

    state = {
        firebase: null,
        usuario : {
            email : '',
            password: '',
            loading: false
        }
    }

    //


      //

    static getDerivedStateFromProps(nextProps, prevState){

        if(nextProps.firebase === prevState.firebase){
            return null;    
        }

        return {
            firebase : nextProps.firebase
        }
    }

    

    onChange = e =>{
        let usuario = Object.assign({},this.state.usuario);
        usuario[e.target.name] = e.target.value;
        this.setState({
            usuario : usuario
        })
    }

    login = async e =>{
        e.preventDefault();
        //
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
          }, 15000);
//
        const  [{sesion}, dispatch] = this.context;
        const {firebase, usuario} = this.state;
        const {email, password} = usuario;

        let callback = await iniciarSesion(dispatch, firebase,email, password);
        console.log(callback);
        if(callback.status){
            this.props.history.push("/");
        }else{
            openMensajePantalla(dispatch, {
                open : true,
                mensaje: callback.mensaje.message
            })
        }
        
    }

    resetearPassword = () => {
        const {firebase, usuario} = this.state;
        const [{sesion}, dispatch] = this.context;

        firebase.auth.sendPasswordResetEmail(usuario.email)
            .then(success=>{
                openMensajePantalla(dispatch,{
                    open: true,
                    mensaje: "Se ha enviado un correo electronico a tu cuenta"
                })
            })
            .catch(error=>{
                openMensajePantalla(dispatch, {
                    open : true,
                    mensaje: error.message
                })
            })

    }


    render() {
        const { loading } = this.state;

        return (
           <Container maxWidth="xs">
              
              <Paper style={style.paper}>
               <div >
                    <Avatar style={style.avatar}>
                        <LockOutlineIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Escriba su correo y contraseña
                    </Typography>
                    <form style={style.form}>
                         <TextField 
                            variant="outlined"
                            label="Correo"
                            name="email"
                            fullWidth
                            margin="normal"
                            onChange = {this.onChange}
                            value = {this.state.usuario.email || ''}
                         />
                         <TextField 
                            variant="outlined"
                            label="Contraseña"
                            type="password"
                            name="password"
                            fullWidth
                            margin="normal"
                            onChange = {this.onChange}
                            value = {this.state.usuario.password}
                         />
                          {loading && (
            <LinearProgress style={style.load} />
          )}
                         <Button
                         type="submit"
                         fullWidth
                         variant="contained"
                         color="primary"
                         onClick={this.login}
                         style={style.submit}
                         >
                             Ingresar
                         </Button>

                         
                        
                    </form>

               </div>
                
               </Paper>
           </Container>
        );
    }
}

export default compose(consumerFirebase)(Login);