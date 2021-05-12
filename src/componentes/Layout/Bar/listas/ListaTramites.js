import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import CommuteIcon from '@material-ui/icons/Commute';

import ContactMailIcon from '@material-ui/icons/ContactMail';
import PaymentIcon from '@material-ui/icons/Payment';
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

export default function ListaTramites() {
  const classes = useStyles();



  return (
    <div className={classes.root}>
   
   <Chip   icon={<ContactMailIcon />} label="Registro de conducir" component={Link} button to="/licencia" clickable />
      <Chip   icon={<PaymentIcon />} label="Habilitacion vehicular" component={Link} button to="/habilitacion" clickable />
      <Chip   icon={<CommuteIcon />} label="Autoescuela" component={Link} button to="/autoescuela" clickable />
      <Chip   icon={<PaymentIcon />} label="Patente Comercial" component={Link} button to="/patente" clickable />

      
     
    </div>
  );
}