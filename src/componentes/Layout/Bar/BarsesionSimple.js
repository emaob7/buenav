import React, { Component } from "react";
import {
  Toolbar,
  IconButton,
  Drawer,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { consumerFirebase } from "../../../server";
import { compose } from "recompose";
import { StateContext } from "../../../sesion/store";
import { MenuDerecha } from "./menuDerecha";
import { MenuIzquierda } from "./menuIzquierda";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import BotonInstitucion from "./botones/BotonInstitucion";
import BotonTransparencia from "./botones/BotonTransparencia";
import BotonCiudad from "./botones/BotonCiudad";
import BotonServicios from "./botones/BotonServicios";
import Tooltip from '@material-ui/core/Tooltip';
import boton from  "../../Imagenes/membrete/boton.png";
import Grid from "@material-ui/core/Grid";

const style={
  foto: {
    width: "30%",
    height: "30%",
  },
}

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

class BarSesionSimple extends Component {



  static contextType = StateContext;

  state = {
    firebase: null,
    right: false,
    left: false
  };
  salirSesionApp = () => {
    
      this.props.history.push("/auth/login");
    
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
              salirSesion={this.salirSesionApp}
            ></MenuDerecha>
          </div>
        </Drawer>
        <Toolbar>
        <Tooltip title="Expandir Menu Lateral">
        <IconButton edge="start" className={classes.menuButton}
          style={{ color: '#757575' }}
          onClick={this.toggleDrawer("left",true)}>
            <i className="material-icons">menu</i>
          </IconButton>
          </Tooltip>
          
          <Grid item xs={12} sm={5} md={5}>
          <Link  to="/">
          <Tooltip title="Ir a inicio">
            <img  src ={boton} style={style.foto} />
            </Tooltip>
           </Link>
            </Grid>
        
        <div className={classes.grow}></div>
{/**Agregar una imagen cuanse pueda del logo */}
          <div className={classes.sectionDesktop}>
{/* seccion para menu listas, Desktop */}
 
        <BotonInstitucion/>
        <BotonTransparencia/>
        <BotonCiudad/>
        <BotonServicios/>
        <Tooltip title="Ingresar">
        <IconButton
              style={{ color: '#757575' }}
              component={Link} button to="/auth/login"
            >
              <i className="material-icons">person</i>
            </IconButton>
            </Tooltip>
          </div>

                 
          <div className={classes.sectionMobile}>
{/* seccion para menu listas, Mobile */}
<Tooltip title="Ingresar">
        <IconButton
              style={{ color: '#757575' }}
              component={Link} button to="/auth/login"
            >
              <i className="material-icons">person</i>
            </IconButton>
            </Tooltip>

          
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
)(BarSesionSimple);