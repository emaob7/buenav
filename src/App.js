import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Snackbar } from "@material-ui/core";
import "./App.css";
import AppNavBar from "./componentes/Layout/AppNavBar";
import AppNavBarSimple from "./componentes/Layout/AppNavBarSimple";
import Footer from "./componentes/Layout/Footer";
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
import NuevoConsejal from "./componentes/vistas/NuevoConsejal";
import EditarInmueble from "./componentes/vistas/EditarInmueble";
import VerMasNoticias from "./componentes/vistas/VerMasNoticias";
import LoginTelefono from "./componentes/Seguridad/LoginTelefono";
import Noticias from "./componentes/vistas/Noticias";
import MarcoLegal from "./componentes/vistas/PaginasUsuario/Institucion/MarcoLegal";
import ResolucionesMuni from "./componentes/vistas/PaginasUsuario/Institucion/ResolucionesMuni";
import Organigrama from "./componentes/vistas/PaginasUsuario/Institucion/Organigrama";
import Galeria from "./componentes/vistas/PaginasUsuario/Ciudad/Galeria";
import Historia from "./componentes/vistas/PaginasUsuario/Ciudad/Historia";
import Mapa from "./componentes/vistas/PaginasUsuario/Ciudad/Mapa";
import UbicacionInformacion from "./componentes/vistas/PaginasUsuario/Ciudad/UbicacionInformacion";
import Consejales from "./componentes/vistas/PaginasUsuario/Junta/Consejales";
import Ordenanzas from "./componentes/vistas/PaginasUsuario/Junta/Ordenanzas";
import ResolucionesJunta from "./componentes/vistas/PaginasUsuario/Junta/ResolucionesJunta";
import Autoescuela from "./componentes/vistas/PaginasUsuario/Tramites/Autoescuela";
import Habilitacion from "./componentes/vistas/PaginasUsuario/Tramites/Habilitacion";
import Licencia from "./componentes/vistas/PaginasUsuario/Tramites/Licencia";
import Motocicleta from "./componentes/vistas/PaginasUsuario/Tramites/Motocicleta";
import AnexoPersonal from "./componentes/vistas/PaginasUsuario/Transparencia/AnexoPersonal";
import Aportes from "./componentes/vistas/PaginasUsuario/Transparencia/Aportes";
import Balances from "./componentes/vistas/PaginasUsuario/Transparencia/Balances";
import Cheques from "./componentes/vistas/PaginasUsuario/Transparencia/Cheques";
import Contrataciones from "./componentes/vistas/PaginasUsuario/Transparencia/Contrataciones";
import Contratados from "./componentes/vistas/PaginasUsuario/Transparencia/Contratados";
import Royalties from "./componentes/vistas/PaginasUsuario/Transparencia/Royalties";
import NoticiasSimple from "./componentes/vistas/PaginasUsuario/NoticiasSimple";
import Presupuestos from "./componentes/vistas/PaginasUsuario/Transparencia/Presupuestos";


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
                path="/consejal/nuevo"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoConsejal}
              />
              <RutaAutenticada
                exact
                path="/consejal/editar"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Consejales}
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
              <Route
                exact
                path="/"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Noticias}
              ></Route>
              <Route
              exact
              path="/galeria"
              component={Galeria}
              ></Route>
              <Route
              exact
              path="/historia"
              component={Historia}
              ></Route>
              <Route
              exact
              path="/mapa"
              component={Mapa}
              ></Route>
              <Route
              exact
              path="/ubicacioninformacion"
              component={UbicacionInformacion}
              ></Route>
              <Route
              exact
              path="/intendente"
              component={Intendente}
              ></Route>
              <Route
              exact
              path="/marcolegal"
              component={MarcoLegal}
              ></Route>
              <Route
              exact
              path="/organigrama"
              component={Organigrama}
              ></Route>
              <Route
              exact
              path="/resolucionesmuni"
              component={ResolucionesMuni}
              ></Route>
              <Route
              exact
              path="/consejales"
              component={Consejales}
              ></Route>
              <Route
              exact
              path="/ordenanzas"
              component={Ordenanzas}
              ></Route>
              <Route
              exact
              path="/resolucionesjunta"
              component={ResolucionesJunta}
              ></Route>
              <Route
              exact
              path="/autoescuela"
              component={Autoescuela}
              ></Route>
              <Route
              exact
              path="/habilitacion"
              component={Habilitacion}
              ></Route>
              <Route
              exact
              path="/licencia"
              component={Licencia}
              ></Route>
              <Route
              exact
              path="/motocicleta"
              component={Motocicleta}
              ></Route>
              <Route
              exact
              path="/anexopersonal"
              component={AnexoPersonal}
              ></Route>
              <Route
              exact
              path="/aportes"
              component={Aportes}
              ></Route>
              <Route
              exact
              path="/balances"
              component={Balances}
              ></Route>
              <Route
              exact
              path="/cheques"
              component={Cheques}
              ></Route>
              <Route
              exact
              path="/contrataciones"
              component={Contrataciones}
              ></Route>
              <Route
              exact
              path="/contratados"
              component={Contratados}
              ></Route>
              <Route
              exact
              path="/presupuestos"
              component={Presupuestos}
              ></Route>
              <Route
              exact
              path="/royalties"
              component={Royalties}
              ></Route>
              <Route path="/auth/Login" exact component={Login}></Route>
              <Route path="/auth/LoginTelefono" exact component={LoginTelefono}></Route>
            </Switch>
          </Grid>
        </MuiThemeProvider>
      </Router>
      <Footer/>
    </React.Fragment>
    
  ) : null;
}

export default App;
