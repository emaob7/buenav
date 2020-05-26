import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import {Snackbar} from "@material-ui/core";
import "./App.css";
import AppNavBar from "./componentes/Layout/AppNavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListaInmuebles from "./componentes/vistas/ListaInmuebles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import RegistrarUsuario from "./componentes/Seguridad/RegistrarUsusario";
import Login from "./componentes/Seguridad/Login";
import { FirebaseContext } from "./server";
import { useStateValue } from "./sesion/store";
import openSnackbarReducer from "./sesion/reducers/openSnackbarReducer";

function App(props) {
  let firebase = React.useContext(FirebaseContext);
  const [autenticacionIniciada, setupFirebaseInicial] = React.useState(false);

  const [openSnackbar, dispatch ] = useStateValue();

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
        onClose ={" "}
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
        <div className="App">
          <MuiThemeProvider theme={theme}>
            <AppNavBar />
            <Grid container>
              <Switch>
                <Route path="/" exact component={ListaInmuebles}></Route>
                <Route
                  path="/auth/RegistrarUsuario"
                  exact
                  component={RegistrarUsuario}
                ></Route>
                <Route path="/auth/Login" exact component={Login}></Route>
              </Switch>
            </Grid>
          </MuiThemeProvider>
        </div>
      </Router>
    </React.Fragment>
  ) : null;
}

export default App;
