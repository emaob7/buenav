import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import AssignmentIcon from '@material-ui/icons/Assignment';
import BallotIcon from '@material-ui/icons/Ballot';

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
   
   <Chip   icon={<AssignmentIndIcon />} label="Nomina de funcionarios" component="a" href="/anexopersonal" clickable />
      <Chip   icon={<AssignmentIcon />} label="Royalties" component="a" href="/royalties" clickable />
      <Chip   icon={<AssignmentIcon />} label="Fonacide" component="a" href="/fonacide" clickable />
      <Chip   icon={<BallotIcon />} label="Inventario" component="a" href="/inventario" clickable />
      
     
    </div>
  );
}