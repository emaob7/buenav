import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Snackbar } from "@material-ui/core";
import "./App.css";
import AppNavBar from "./componentes/Layout/AppNavBar";
import AppNavBarSimple from "./componentes/Layout/AppNavBarSimple";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListaInmuebles from "./componentes/vistas/ListaInmuebles";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./componentes/theme/theme";
import RegistrarUsuario from "./componentes/Seguridad/RegistrarUsusario";
import Login from "./componentes/Seguridad/Login";
import { FirebaseContext } from "./server";
import { useStateValue } from "./sesion/store";
import openSnackbarReducer from "./sesion/reducers/openSnackbarReducer";
import RutaAutenticada from "./componentes/Seguridad/RutaAutenticada";
import PerfilUsuario from "./componentes/Seguridad/PerfilUsuario";
import NuevoInmueble from "./componentes/vistas/NuevoInmueble";
import Intendente from "./componentes/vistas/PaginasUsuario/Institucion/Intendente";
import NuevoIntendente from "./componentes/vistas/NuevoIntendente";
import EditarInmueble from "./componentes/vistas/EditarInmueble";
import VerMasNoticias from "./componentes/vistas/VerMasNoticias";
import LoginTelefono from "./componentes/Seguridad/LoginTelefono";
import Noticias from "./componentes/vistas/Noticias";

function App(props) {
  let firebase = React.useContext(FirebaseContext);
  const [autenticacionIniciada, setupFirebaseInicial] = React.useState(false);

  const [openSnackbar, dispatch] = useStateValue();

  useEffect(() => {
    firebase.estaIniciado().then((val) => {
      setupFirebaseInicial(val);
    });
  });



  
  return autenticacionIniciada !== false ? (
    
   <React.Fragment>
      <Snackbar>
        anchorOrigin = {{ vertical: "bottom", horizontal: "center" }}
        open ={openSnackbar ? openSnackbar.open : false}
        autoHideDuration={3000}
        contentProps=
        {{
          "aria-describedBy": "message-id",
        }}
        message=
        {
          <span id="message-id">
            {openSnackbar ? openSnackbar.mensaje : ""}
          </span>
        }
        onClose =
        {() =>
          dispatch({
            type: "OPEN_SNACKBAR",
            openMensaje: {
              open: false,
              mensaje: "",
            },
          })
        }
      </Snackbar>

      <Router>
     
      
     
        <MuiThemeProvider theme={theme}>
          <AppNavBar />
          <AppNavBarSimple/>
          
          

          <Grid container>
            <Switch>
              <Route
                exact
                path="/"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Noticias}
              ></Route>
              <Route
              exact
              path="/intendente"
              component={Intendente}
              ></Route>
               <RutaAutenticada
                exact
                path="/auth/perfil"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={PerfilUsuario}
              />
               <RutaAutenticada
                exact
                path="/inmueble/nuevo"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoInmueble}
              />
              <RutaAutenticada
                exact
                path="/intendente/nuevo"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoIntendente}
              />
              <RutaAutenticada
                exact
                path="/inmueble/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={EditarInmueble}
              />
              <Route
                path="/auth/RegistrarUsuario"
                exact
                component={RegistrarUsuario}
              ></Route>
               <Route
                path="/verMasNoticias/:id"
                exact
                component={VerMasNoticias}
              ></Route>
              <Route path="/auth/Login" exact component={Login}></Route>
              <Route path="/auth/LoginTelefono" exact component={LoginTelefono}></Route>
            </Switch>
          </Grid>
        </MuiThemeProvider>
      </Router>
      
    </React.Fragment>
    
  ) : null;
}

export default App;
