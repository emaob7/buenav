import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import PeopleIcon from '@material-ui/icons/People';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
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

export default function ListaInstitucion() {
  const classes = useStyles();



  return (
    <div className={classes.root}>
   
   <Chip   icon={<EmojiPeopleIcon />} label="Intendente" component={Link} button to="/intendente" clickable />
      <Chip   icon={<PeopleIcon />} label="Junta Municipal" component={Link} button to="/consejales" clickable />
      <Chip   icon={<AccountTreeIcon />} label="Organigrama" component={Link} button to="/organigrama" clickable />
      <Chip   icon={<LibraryBooksIcon />} label="Resoluciones Municipales" component={Link} button to="/resolucionesmuni" clickable />
      
     
    </div>
  );
}