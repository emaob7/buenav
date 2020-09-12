import React, { Component } from "react";
import {
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Avatar,
  Menu,
  Container
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { consumerFirebase } from "../../../server";
import { compose } from "recompose";
import { StateContext } from "../../../sesion/store";
import { salirSesion } from "../../../sesion/actions/sesionAction";
import { MenuDerecha } from "./menuDerecha";
import { MenuIzquierda } from "./menuIzquierda";
import fotoUsuarioTemp from "../../../logo.svg";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import BotonInstitucion from "./botones/BotonInstitucion";
import BotonTransparencia from "./botones/BotonTransparencia";
import BotonCiudad from "./botones/BotonCiudad";
import BotonServicios from "./botones/BotonServicios";


const styles = (theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",

    },
  },
  sectionMobile1: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
      flexGrow: 1,
      marginRight: theme.spacing(2),

    },
  },
  grow: {
    flexGrow: 20,
  },
 
  avatarSize: {
    width: 40,
    height: 40,
  },
  listItemText: {
    fontSize: "14px",
    fontWeight: 600,
    paddingLeft: "15px",
    color: "#212121",
  },
  list: {
    width: 250,
  },
});

class BarSession extends Component {



  static contextType = StateContext;

  state = {
    firebase: null,
    right: false,
    left: false
  };
  salirSesionApp = () => {
    const { firebase } = this.state;
    const [{ sesion }, dispatch] = this.context;
    salirSesion(dispatch, firebase).then((success) => {
      this.props.history.push("/auth/login");
    });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    let nuevosObjetos = {};
    if (nextProps.firebase !== prevState.firebase) {
      nuevosObjetos.firebase = nextProps.firebase;
    }
    return nuevosObjetos;

  }
  //agregado


//agregado2

  render() {
    const { classes } = this.props;
    const [{ sesion }, dispatch] = this.context;
    const { usuario } = sesion;
    let textoUsuario = usuario.nombre + " " + usuario.apellido;

    return (
      <div>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
          anchor="left"
        >
          <div
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            <MenuIzquierda
              classes={classes}

            ></MenuIzquierda>
          </div>
        </Drawer>

        <Drawer
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
          anchor="right"
        >
          <div
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            <MenuDerecha
              classes={classes}
              usuario={usuario}
              textoUsuario={textoUsuario}
              fotoUsuario={usuario.foto || fotoUsuarioTemp}
              salirSesion={this.salirSesionApp}
            ></MenuDerecha>
          </div>
        </Drawer>
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton}
          style={{ color: '#757575' }}
          onClick={this.toggleDrawer("left",true)}>
            <i className="material-icons">menu</i>
          </IconButton>
          
        <Typography variant="h6" style={{ color: '#757575' }} component={Link} button to="/" >Municipalidad de Buena Vista</Typography>
        <div className={classes.grow}></div>
{/**Agregar una imagen cuanse pueda del logo */}
          <div className={classes.sectionDesktop}>
{/* seccion para menu listas, Desktop */}
        <BotonInstitucion/>
        <BotonTransparencia/>
        <BotonCiudad/>
        <BotonServicios/>
        <IconButton
              style={{ color: '#757575' }}
              onClick={this.toggleDrawer("right", true)}
            >
              <i className="material-icons">more_vert</i>
            </IconButton>
          </div>

                 
          <div className={classes.sectionMobile}>
{/* seccion para menu listas, Mobile */}


            <IconButton
              style={{ color: '#757575' }}
              onClick={this.toggleDrawer("right", true)}
            >
              <i className="material-icons">more_vert</i>
            </IconButton>
          </div>
        </Toolbar>
      </div>
    );
  }
}

export default compose(
  withRouter,
  consumerFirebase,
  withStyles(styles)
)(BarSession);
