import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import CommuteIcon from '@material-ui/icons/Commute';

import ContactMailIcon from '@material-ui/icons/ContactMail';
import PaymentIcon from '@material-ui/icons/Payment';

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
   
   <Chip   icon={<ContactMailIcon />} label="Registro de conducir" component="a" href="/licencia" clickable />
      <Chip   icon={<PaymentIcon />} label="Habilitacion vehicular" component="a" href="/habilitacion" clickable />
      <Chip   icon={<PaymentIcon />} label="Habilitacion Motocicletas" component="a" href="/motocicleta" clickable />
      <Chip   icon={<CommuteIcon />} label="Autoescuela" component="a" href="/autoescuela" clickable />
      
     
    </div>
  );
}