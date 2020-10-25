import React from "react";
import { List, ListItemText, Divider, ListItem} from "@material-ui/core";
import { Link } from "react-router-dom";

const style={
 
  inline: {
    margin: 10,
    paddingLeft: 17,
    marginLeft: "auto"
  },
};

export const MenuIzquierda = ({ classes }) => (

  
  <div className={classes.list}>
    
    
    


    
    <ListItemText style={style.inline}>Institucional</ListItemText>
   
    <List>
      <ListItem component={Link} button to="/intendente">
        <i className="material-icons">emoji_people</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Intendente"
        />
              </ListItem>
              <ListItem component={Link} button to="/consejales">
        <i className="material-icons">people</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Junta Municipal"
        />
              </ListItem>
      <ListItem component={Link} button to="/organigrama">
        <i className="material-icons">account_tree</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Organigrama"
        />
      </ListItem>
      <ListItem component={Link} button to="/resolucionesmuni">
        <i className="material-icons">library_books</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Resoluciones"
        />
      </ListItem>
      <Divider />
      <ListItemText style={style.inline}>Transparencia - Tesakã</ListItemText>
      <ListItem component={Link} button to="/anexopersonal">
        <i className="material-icons">assignment_ind</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Anexo Personal"
        />
              </ListItem>
              <ListItem component={Link} button to="/royalties">
        <i className="material-icons">assignment</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Royalties"
        />
              </ListItem>
      <ListItem component={Link} button to="/fonacide">
        <i className="material-icons">assignment</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Fonacide"
        />
      </ListItem>
      <ListItem component={Link} button to="/inventario">
        <i className="material-icons">ballot</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Inventario"
        />
      </ListItem>

      <Divider />
      <ListItemText style={style.inline}>Nuestra Ciudad</ListItemText>
      <ListItem component={Link} button to="/historia">
        <i className="material-icons">book</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Historia"
        />
              </ListItem>
              <ListItem component={Link} button to="/ubicacioninformacion">
        <i className="material-icons">room</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Ubicación"
        /> 
              </ListItem>
      <ListItem component={Link} button to="/mapa">
        <i className="material-icons">map</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Mapa"
        />
      </ListItem>
      <ListItem component={Link} button to="/galeria">
        <i className="material-icons">photo_library</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Galeria"
        />
      </ListItem>
      
      <Divider />
      <ListItemText style={style.inline}>Tramites y servicios</ListItemText>
      <ListItem component={Link} button to="/licencia">
        <i className="material-icons">contact_mail</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Registro de conducir"
        />
              </ListItem>
              <ListItem component={Link} button to="/habilitacion">
        <i className="material-icons">payment</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Habilitacion de vehiculos"
        />
              </ListItem>
      <ListItem component={Link} button to="/motocicleta">
        <i className="material-icons">payment</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Habilitacion de motocicletas"
        />
      </ListItem>
      <ListItem component={Link} button to="/autoescuela">
        <i className="material-icons">commute</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Autoescuela"
        />
      </ListItem>
      
    </List>
  </div>
);