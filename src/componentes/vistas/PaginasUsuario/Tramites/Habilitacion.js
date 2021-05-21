import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Breadcrumbs, Container, Grid, Typography, Link } from '@material-ui/core';
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ListaTramites from "../../../Layout/Bar/listas/ListaTramites";
import AcordeonH from "../../../vistas/PaginasUsuario/Tramites/AcordeonH";
import TouchAppIcon from '@material-ui/icons/TouchApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
 
  body: {
    fontSize: 14,
  },
}))(TableCell);
const style={
  paper: {
    backgroundColor: "#fff",
    marginTop:12,
    marginBottom:27
    
  },
  tipografia1:{
    marginTop:20,
    color: '#fff'
  },
  tipografia:{
    marginTop:20,
    
  },
  breadcrumbs:{
    backgroundColor: "#fafafa",
    marginTop:2,
    padding: "5px",
    color: "#fff"
  },
  icon:{
  marginRight: 0.5,
  width: 20,
  height: 20,
},

link: {
  display: "flex"
},
div:{
  marginBottom: 22,
  backgroundColor: "#0071bc",
  width : 80,
  height: 5,
},
};

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Motocicleta', "Gs. 45.000"  ),
 
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Habilitacion() {
  const classes = useStyles();

  return (
    
    <Container>
     
        <ListaTramites/>
            <Paper style={style.breadcrumbs}>
                <Grid item xs={12} sm={12}>
            
                <Breadcrumbs aria-label="breadcrumbs">
            <Link color="inherit" style={style.link} href="/" >
                                    <HomeIcon style={style.icon} />
                                     Municipalidad de Buena Vista 
                                </Link>
                                <Link color="inherit" style={style.link} href="/habilitacion" >
                                    <ContactMailIcon style={style.icon} />
                                     Habilitacion 
                                </Link>
                        </Breadcrumbs>
                      </Grid>
                      
      </Paper>
      <Typography  variant="h4"  color="textSecondary" style={style.tipografia}>
          HABILITACION <br/> DE VEHICULOS
        </Typography>
        <div style={style.div}></div>
        <Grid container spacing={3}>
        <Grid item  xs={12} sm={12} md={12}>
        
        <Typography variant="h4" color="textSecondary" style={style.tipografia}>
          Requisitos
        </Typography>
        <Typography  variant="h5"  color="textSecondary" >
         Elija para ver requisito <TouchAppIcon/>
        </Typography>
        <Paper style={style.paper}>
        
          <AcordeonH/>
          </Paper>
          </Grid>
          </Grid>
          <Typography  variant="h5"   style={style.tipografia1}>
         Aquí podrá ver lista de costos Aproximados<ExpandMoreIcon/>
        </Typography>
        <Paper style={style.paper} >
          
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Tipo de vehiculo</StyledTableCell>
            <StyledTableCell align="left">Costo aproximado</StyledTableCell>
            <StyledTableCell align="left"> </StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    
    </Container>
  );
}
