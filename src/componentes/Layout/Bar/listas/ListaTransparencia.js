import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import AssignmentIcon from '@material-ui/icons/Assignment';
import BallotIcon from '@material-ui/icons/Ballot';
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

export default function ListaTransparencia() {
  const classes = useStyles();



  return (
    <div className={classes.root}>
   
   <Chip   icon={<AssignmentIndIcon />} label="Nomina de funcionarios" component={Link} button to="/anexopersonal" clickable />
      <Chip   icon={<AssignmentIcon />} label="Royalties" component={Link} button to="/royalties" clickable />
      <Chip   icon={<AssignmentIcon />} label="Fonacide" component={Link} button to="/fonacide" clickable />
      <Chip   icon={<BallotIcon />} label="Inventario" component={Link} button to="/inventario" clickable />
      
     
    </div>
  );
}