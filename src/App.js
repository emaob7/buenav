import React, { useEffect } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import {Snackbar } from "@material-ui/core";
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
import RutaAutenticada from "./componentes/Seguridad/RutaAutenticada";
import PerfilUsuario from "./componentes/Seguridad/PerfilUsuario";
import LoginTelefono from "./componentes/Seguridad/LoginTelefono";
import Scroll from "./componentes/Layout/Scroll";
import NuevaPersona from "./componentes/vistas/NuevaPersona";
import NuevoDatosp from "./componentes/vistas/NuevoDatosp";
import NuevoOb from "./componentes/vistas/NuevoOb";
import CurriculumList from "./componentes/vistas/CurriculumList";
import { MultiStepForm } from "./componentes/vistas/MultiStepForm";
import Experiencia from "./componentes/vistas/stepForm/Experiencia";





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
          
          
          <AppNavBarSimple />
          <AppNavBar />
          <div  className="App-header">
         <Scroll showBelow={250}/>

          
          

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
                path="/datosp/nuevo/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoDatosp}
              />

              <RutaAutenticada
                exact
                path="/experiencia/nuevo/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Experiencia}
              />
            

              


              <RutaAutenticada
                exact
                path="/step/nuevo/"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={MultiStepForm}
                />  
                
             
                <RutaAutenticada
                exact
                path="/"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={CurriculumList}
              />

              <RutaAutenticada
                exact
                path="/nuevo/datos"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoDatosp}
              />
              
              <RutaAutenticada
                exact
                path="/objetivo/nuevo/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoOb}
              />

              <RutaAutenticada
                exact
                path="/persona/nuevo"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevaPersona}
              />
              
              
              <Route
                path="/auth/registrar"
                exact
                component={RegistrarUsuario}
              ></Route>
              

              <Route path="/auth/Login" exact component={Login}></Route>
              <Route path="/auth/LoginTelefono" exact component={LoginTelefono}></Route>
            </Switch>
          </Grid>

          <Footer/>
          </div>
        </MuiThemeProvider>
      </Router>

      
      
    </React.Fragment>
    
  ) : null;
}

export default App;
