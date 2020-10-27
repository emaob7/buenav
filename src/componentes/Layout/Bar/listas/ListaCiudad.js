import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import MapIcon from '@material-ui/icons/Map';
import RoomIcon from '@material-ui/icons/Room';

import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import BookIcon from '@material-ui/icons/Book';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1.5),
    },
  },
}));

export default function ListaCiudad() {
  const classes = useStyles();



  return (
    <div className={classes.root}>
   
   <Chip   icon={<BookIcon />} label="Historia" component={Link} button to="/historia" clickable />
      <Chip   icon={<RoomIcon />} label="Ubicación" component={Link} button to="/ubicacioninformacion" clickable />
      <Chip   icon={<MapIcon />} label="Mapa" component={Link} button to="/mapa" clickable />
      <Chip   icon={<PhotoLibraryIcon />} label="Galeria Fotografica" component={Link} button to="/galeria" clickable />
      
     
    </div>
  );
}