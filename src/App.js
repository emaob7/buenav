import React, { useEffect } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import { Snackbar } from "@material-ui/core";
import "./App.css";
import AppNavBar from "./componentes/Layout/AppNavBar";
import AppNavBarSimple from "./componentes/Layout/AppNavBarSimple";
import Footer from "./componentes/Layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import NuevoAnexo from "./componentes/vistas/NuevoAnexo";
import NuevoFonacide from "./componentes/vistas/NuevoFonacide";
import NuevoRoyalti from "./componentes/vistas/NuevoRoyalti";
import EditarInmueble from "./componentes/vistas/EditarInmueble";
import VerMasNoticias from "./componentes/vistas/VerMasNoticias";
import Noticias from "./componentes/vistas/Noticias";
import EliminarAnexoU from "./componentes/vistas/EliminarAnexoU";
import EliminarFonacideU from "./componentes/vistas/EliminarFonacideU";
import EliminarRoyaltiU from "./componentes/vistas/EliminarRoyaltiU";
import LoginTelefono from "./componentes/Seguridad/LoginTelefono";
import NoticiasSimple from "./componentes/vistas//PaginasUsuario/NoticiasSimple";
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
import Inventario from "./componentes/vistas/PaginasUsuario/Transparencia/Inventario";
import Cheques from "./componentes/vistas/PaginasUsuario/Transparencia/Cheques";
import Contrataciones from "./componentes/vistas/PaginasUsuario/Transparencia/Contrataciones";
import Fonacide from "./componentes/vistas/PaginasUsuario/Transparencia/Fonacide";
import Royalties from "./componentes/vistas/PaginasUsuario/Transparencia/Royalties";
import Presupuestos from "./componentes/vistas/PaginasUsuario/Transparencia/Presupuestos";
import Principal from "./componentes/vistas/PaginasUsuario/Principal";



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
    
   <React.Fragment >
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
          <div  className="App-header">
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
                path="/anexo/nuevo"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoAnexo}
              />
               <RutaAutenticada
                exact
                path="/royalti/nuevo"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoRoyalti}
              />
              <RutaAutenticada
                exact
                path="/fonacide/nuevo"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoFonacide}
              />
              <RutaAutenticada
                exact
                path="/consejal/editar"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Consejales}
              />
              <RutaAutenticada
                exact
                path="/anexo/eliminar"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={EliminarAnexoU}
              />
              <RutaAutenticada
                exact
                path="/fonacide/eliminar"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={EliminarFonacideU}
              />
              <RutaAutenticada
                exact
                path="/royalti/eliminar"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={EliminarRoyaltiU}
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
                path="/noticias1"
                component={NoticiasSimple}
              ></Route>
              <Route
                exact
                path="/"
                component={Principal}
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
              path="/noticias/editar"
              component={Noticias}
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
              path="/inventario"
              component={Inventario}
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
              path="/fonacide"
              component={Fonacide}
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
          </div>
        </MuiThemeProvider>
      </Router>
      <Footer/>
    </React.Fragment>
    
  ) : null;
}

export default App;
