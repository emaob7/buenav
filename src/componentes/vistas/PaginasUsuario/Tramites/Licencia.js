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
import Acordeon from "../../../vistas/PaginasUsuario/Tramites/Acordeon";
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
  tipografia:{
    marginTop:20
  },
  tipografia1:{
    marginTop:20,
    color: '#fff'
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
  createData('Motociclista', "Habilita a su titular a conducir exclusivamente ciclomotores, motocicletas, triciclones, cuatriciclones y motocargas con propulsión propia", 6.0, "18 años","Gs. 85.000"  ),
  createData('Particular', "Habilita a su titular aconducir jeep,automoviles, camionetas y furgonetas, siempre que estor sean de uso personal, que su capacidad de carga no exeda los 2000 kg. y que no esten destinados al servicio del transporte público o de carga en general.", 9.0, "18 años", "90.000"),
  createData('Extranjero', "Habilita a su titular a conducir vehiculo de uso privado y/o de carga de hasta 2000 Kg. Esta categoria de licencia será valida solo por un año, se expide con la presentación del carnet de conducir de origen y carnet de inmigrante.", 16.0, "18 años", "90.000"),
  createData('Profesional Clase D', "Habilita a su titular a su titular a conducir  vehiculo automotor de transporte de mercancias inflamables, explosivas o toxicas, conforme a la reglamentación de la autoridad competente, además, puede conducir los rodados correspondientes a las categorias: Clase B Superior, Clase B, Clase C y Clase Particular", 3.7, "24 años y haber obtenido la licencia de conducir Clase B por 2 (dos) años", "-----"),
  createData('Profesional Clase C', "Habilita a su titular a <conducir exclusivamente tractores, maquinarias agricolas y las denominadas pesadas", 16.0, "20 años", "140.000"),
  createData('Profesional Clase B', "Habilita a su titular a conducir todo tipo de vehiculo tipo de vehiculo automotor de hasta 5 toneladas de capacidad,ya sean estos, afectados al uso personal o al servicio de transporte de cargas.", 6.0, "20 años y haber obtenido la licencia de conducir Clase Particular por 2 (dos) años","107.000"  ),
  createData('Profesional Clase B Superior', "Habilita a su titular a conducir todo tipo de vehiculo automotor de dos o más ejes, afectado al transporte de cargas internacional inclusive, con o sin remolque, y sin restriccion de capacidad de tonelaje.", 6.0, "20 años y haber obtenido la licencia de conducir Clase B por 2 (dos) años","Gs. 120.000"  ),
  createData('Profesional Clase A', "Habilita a su titular a conducir vehiculo automotor de todo tipo, y en especial, el afectado al Transporte Público Interno.", 6.0, "24 años y haber obtenido la licencia de conducir Clase B por 2 (dos) años","120.000"  ),
  createData('Profesional Clase A Superior', "Habilita a su titular a conducir todo tipo de vehiculo automotor, y en exclusividad, el afectado al Servicio de Transporte Público de Pasajeros Internacional", 6.0, "25 años y haber obtenido la licencia de conducir Clase A por 1 (Un) año","200.000"  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Licencia() {
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
                                <Link color="inherit" style={style.link} href="/licencia" >
                                    <ContactMailIcon style={style.icon} />
                                     Licencia 
                                </Link>
                        </Breadcrumbs>
                      </Grid>
                      
      </Paper>
      <Typography  variant="h4"  color="textSecondary" style={style.tipografia}>
          LICENCIA <br/> DE CONDUCIR
        </Typography>
        <div style={style.div}></div>
        <Grid container spacing={3}>
        <Grid item  xs={12} sm={4} md={12}>
        <Link variant="h5" style={style.tipografia} color="textSecondary" to="chart" target="_blank" href="https://antsv.gov.py/application/files/2515/2215/1014/LEY_DE_TRANSITO_-_DE_BOLSILLO.pdf">
        LEY N° 5016/14 AGENCIA NACIONAL DE TRÁNSITO Y SEGURIDAD VIAL
        </Link>
        <Typography variant="h4" color="textSecondary" style={style.tipografia}>
          Requisitos
        </Typography>
        <Typography  variant="h5"  color="textSecondary" >
         Elija categoria para ver requisito <TouchAppIcon/>
        </Typography>
        <Paper style={style.paper}>
        
          <Acordeon/>
          </Paper>
          </Grid>
          </Grid>
          <Typography  variant="h5"   style={style.tipografia1}>
         Aquí podrá ver más detalles <ExpandMoreIcon/>
        </Typography>
        <Paper style={style.paper} >
          
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Categoria</StyledTableCell>
            <StyledTableCell align="left">Caracteristicas</StyledTableCell>
            <StyledTableCell align="left">Vehiculo</StyledTableCell>
            <StyledTableCell align="left">Edad</StyledTableCell>
            <StyledTableCell align="left">Costo</StyledTableCell>
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
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
              <StyledTableCell align="left">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    
    </Container>
  );
}
