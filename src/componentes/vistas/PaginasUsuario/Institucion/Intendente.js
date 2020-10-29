import React, { Component } from 'react';
import { Paper, Container, Grid, Breadcrumbs, Typography, Box, Link } from '@material-ui/core';
import HomeIcon from "@material-ui/icons/Home";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ListaInstitucion from "../../../Layout/Bar/listas/ListaInstitucion";
import fotoIn from "../../../Imagenes/Intendente/fotoIn.jpg"
import CardContent from '@material-ui/core/CardContent';


const style={
  cardGrid: {
    paddingTop: 8,
    paddingBottom: 8
  },
    paper: {
      backgroundColor: "#eeeeee",
      padding: "20px",
      minHeight: 650,
      marginTop:8
      
    },
    cardMedia: {
      paddingTop: "70%",
     
    },
    typography: {
       
        fontSize: '70%',
        fontWeight: "fontWeightLight",
       
      },
      div:{
        marginBottom: 22,
        backgroundColor: "#0071bc",
        width : 80,
        height: 5,
      },
       div2:{
        
        marginRight: 'auto',
        marginLeft: 'auto',
      },

    paper2: {
        display: 'flex',
        paddingTop: "45px",
        paddingBottom: "45px",
        paddingLeft: "-5px",
        color:'#fff',
        backgroundColor: "#616161"
        
      }
      ,
    breadcrumbs:{
      backgroundColor: "#fafafa",
      marginTop:2,
      padding: "5px",
      marginBottom: "15px",
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
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
      },
    root: {
        maxWidth: 700,

      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
   
    submit:{
        marginTop: -15,
        marginBottom:25
    },
    
     
      divavatar :{
        position:"relative"
      },
      content: {
        flexGrow:1,
        backgroundColor: "#fafaaa",
        padding: "20px",
        
},
root: {
  maxWidth: 700,
  
 
},
}
class Intendente extends Component {
   
    
        

     render(){
         return (
  <Container style={style.cardGrid}>
    <ListaInstitucion/>
      <Paper style={style.breadcrumbs}>
                <Grid item xs={12} sm={12}>
            
            <Breadcrumbs aria-label="breadcrumbs">
            <Link color="inherit" style={style.link} href="/" >
                                    <HomeIcon style={style.icon} />
                                     Municipalidad de Buena Vista 
                                </Link>
                                <Link color="inherit" style={style.link} href="/intendente" >
                                    <EmojiPeopleIcon style={style.icon} />
                                     Intendente 
                                </Link>
                        </Breadcrumbs>
                      </Grid>
      </Paper>
      
      <Grid container spacing={3}>
            <Grid item  xs={12} sm={4} md={12}>
            <Typography  variant="h4"  color="textSecondary">
          Intendente <br/> Municipal
        </Typography>
        <div style={style.div} ></div>
      <Paper style={style.paper}>

        <Grid container spacing={3} 
  
  direction="column"
  alignItems="center"
  >
        <Grid item  xs={12} sm={4} md={12}>
          <div style={style.div2}>
          
        <Card style={style.root}>
        <CardMedia
        style={style.cardMedia}
          title="Intendente"
          image={fotoIn}
        />
        <CardContent>
        <Typography  variant="h4" component="h2">
            Ing. Emmanuel Ortigoza
          </Typography>
          <Box fontSize={30}>
          <Typography variant="overline"style={style.typography} color="textSecondary">
            intendente Municipal
          </Typography>
          </Box>
          <Typography variant="body1" color="textSecondary" component="p">
            Calle Santa Rosa de Lima/ 454
          </Typography>
          <Typography variant="body1" color="textSecondary">
          emanuelob7@gmail.com
          </Typography>
          <Typography variant="body2">
            <p/>
          Es hijo del Dr. Óscar Juan Rodríguez Kennedy y Olga Quiñónez, es papá de
Brisa de 20 años y Emmanuel de 8 meses con su actual pareja Lizarella Valiente.
Óscar Rodríguez es Licenciado en Administraciónv de Empresas e Ingeniero
Comercial, desde su más tierna juventud incursionó en la política partidaria, su
vocación le llevo desde temprano a activar en la Gloriosa Asociación Nacional Republicana, Partido Colorado, siendo designado apoderado de la Seccional Número
7 y Candidato Juvenil, por esa base partidaria.
<p/>
Su vocación de dirigente le llevó también a activar en los centros estudiantiles. Así
fue elegido Presidente del Centro de Estudiantes de Ex Alumnos del Colegio “Monseñor Lasagna”.
Desde muy joven ingreso al mundo del trabajo, lo hizo en la función pública, donde
se desempeño por muchos años y ocupo cargos de importancia como Director de
la UOC del Palacio de Justicia.
<p/>
 Un de los grandes logros en el campo laboral fue la distinción que significo en su
carrera profesional ser designado como asesor de la comisión de los festejos del
bicentenario por el Congreso Nacional. Una de las festividades más recordada del
nuevo siglo y que quedará grabada en letras de molde en el gran libro de la historia
patria.
<p/>
Su inquietud artística le llevó de forma circunstancial a participar en programas de
televisión, son muy recordados por los televidentes su paso por los sets de Telefuturo, en los programas “Calle 7 y Baila Conmigo”.
Su carrera política en el campo municipal fue ascendente y brillante. Fue concejal
de Asunción y en su primer período, a los dos años sus colegas ediles le eligen
Presidente de la Junta Municipal; y en diciembre de 2019 asume como Intendente
de Asunción.
<p/>
Profesa la religión Católica y más allá de las religiones se siente un verdadero hijo
de Israel, es Olimpista de corazón, amante de la música paraguaya y amigo de sus
amigos.
          </Typography>
        </CardContent>
        </Card>
        </div>
        </Grid>
        </Grid>
          
                </Paper>
                </Grid>
                </Grid>
            </Container>
         )
     }


}

export default Intendente;