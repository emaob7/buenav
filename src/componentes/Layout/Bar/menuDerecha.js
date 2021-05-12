import React from "react";
import { List,ListItemText, ListItem, Avatar,ListSubheader, Divider  } from "@material-ui/core";
import { Link } from "react-router-dom";

export const MenuDerecha = ({
  classes,
  usuario,
  textoUsuario,
  fotoUsuario,
  salirSesion,
}) => (
  <div className={classes.list}>
    <List>
      <ListItem button component={Link} to="/auth/registrarUsuario">
        <Avatar  src={fotoUsuario} />
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary={textoUsuario}
        ></ListItemText>
      </ListItem>

      
      <ListItem component={Link} button to="/auth/perfil">
        <i className="material-icons">account_box</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Editar Perfil"
        />
        
      </ListItem>
      <ListItem button onClick={salirSesion} >
      <i className="material-icons" >meeting_room</i>
          <ListItemText 
          classes={{primary: classes.listItemText}} 
          primary="Cerrar sesion"
           />
      </ListItem>
    </List>
    
   
    <List>
      
      
      <Divider />
      <ListSubheader>Administrar</ListSubheader>
      <ListItem component={Link} button to="/noticias/editar">
        <i className="material-icons">edit</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Editar / eliminar Noticia"
        />
              </ListItem>
              <ListItem component={Link} button to="/anexo/eliminar">
        <i className="material-icons">edit</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Editar Nomina"
        />
              </ListItem>
      <ListItem component={Link} button to="/fonacide/eliminar">
        <i className="material-icons">edit</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Editar Fonacide"
        />
      </ListItem>
      <ListItem component={Link} button to="/royalti/eliminar">
        <i className="material-icons">edit</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Editar Royalti"
        />
      </ListItem>
      <ListItem component={Link} button to="/inventario/eliminar">
        <i className="material-icons">edit</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Editar Inventario"
        />
      </ListItem>
    </List>
  </div>
);
