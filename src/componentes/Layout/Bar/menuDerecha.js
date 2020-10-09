import React from "react";
import { List, Link,ListItemText, ListItem, Avatar,ListSubheader, Divider  } from "@material-ui/core";

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
    <Divider />
    <ListSubheader>AGREGAR</ListSubheader>
   
    <List>
      <ListItem component={Link} button to="/inmueble/nuevo">
        <i className="material-icons">add_box</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Agregar Noticia"
        />
              </ListItem>
              <ListItem component={Link} button to="/anexo/nuevo">
        <i className="material-icons">add_box</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Agregar Nomina"
        />
              </ListItem>
      <ListItem component={Link} button to="/fonacide/nuevo">
        <i className="material-icons">add_box</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Agregar Fonacide"
        />
      </ListItem>
      <ListItem component={Link} button to="/royalti/nuevo">
        <i className="material-icons">add_box</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Agregar Royalti"
        />
      </ListItem>
      <Divider />
      <ListSubheader>EDITAR / ELIMINAR</ListSubheader>
      <ListItem component={Link} button to="/noticias/editar">
        <i className="material-icons">edit</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Editar / eliminar Noticia"
        />
              </ListItem>
              <ListItem component={Link} button to="/anexo/eliminar">
        <i className="material-icons">delete</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Eliminar Nomina"
        />
              </ListItem>
      <ListItem component={Link} button to="/fonacide/eliminar">
        <i className="material-icons">delete</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Eliminar Fonacide"
        />
      </ListItem>
      <ListItem component={Link} button to="/royalti/eliminar">
        <i className="material-icons">delete</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Eliminar Royalti"
        />
      </ListItem>
    </List>
  </div>
);
