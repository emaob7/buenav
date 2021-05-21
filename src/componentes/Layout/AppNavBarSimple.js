import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import BarSesionSimple from "./Bar/BarSesionSimple";
import { withStyles } from "@material-ui/styles";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from "../theme/theme";
import { compose, fromRenderProps } from "recompose";
import { consumerFirebase } from "../../server";
import { StateContext } from "../../sesion/store";
import membreteIn from  "../Imagenes/membrete/membreteIn.png";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const style={
  foto: {
    width: "100%",
    height: "100%",
  },
}

const styles = (theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
 
});

class AppNavBarSimple extends Component {
  static contextType = StateContext;
  state = {
    firebase: null
  };

  componentDidMount() {
    const { firebase } = this.state;
    const [{ sesion }, dispatch] = this.context;
    if (firebase.auth.currentUser !== null && !sesion) {
      firebase.db
        .collection("Users")
        .doc(firebase.auth.currentUser.uid)
        .get()
        .then(doc => {
          const usuarioDB = doc.data();
          dispatch({
            type: "INICIAR_SESION",
            sesion: usuarioDB,
            autenticado: true,
          });
        });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let nuevosObjetos = {};
    if (nextProps.firebase !== prevState.firebase) {
      nuevosObjetos.firebase = nextProps.firebase;
    }
    return nuevosObjetos;
  }

  render() {

    return (
        <MuiThemeProvider theme= {theme}>
         

      <div>
          
            
        <AppBar position="relative" style={{ background: '#fff' }}>
        
            <BarSesionSimple >

            </BarSesionSimple>
          </AppBar>
         
       
      </div>
      </MuiThemeProvider>
    )
    
  }
}

export default compose(withStyles(styles), consumerFirebase)(AppNavBarSimple);