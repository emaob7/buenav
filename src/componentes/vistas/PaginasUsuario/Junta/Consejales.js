import { Card,CardContent,CardMedia, Container, Grid, Paper, Typography,Link, Breadcrumbs } from '@material-ui/core'
import React, { Component } from 'react'
import fotoCon from "../../../Imagenes/consejales/logo.jpg";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ListaInstitucion from "../../../Layout/Bar/listas/ListaInstitucion";

const style = {
  cardGrid: {
    paddingTop: 8,
    paddingBottom: 8
  },
  paper: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    minHeight: 650,
    marginTop:8
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
card: {
  height: "100%",
  display: "flex",
  flexDirection: "column"
},
root: {
  maxWidth: 445,
},
cardMedia: {
  paddingTop: "70%",
  marginRight: 'auto',
},
}


export default class Consejales extends Component {
  render() {
    return (

      <Container style={style.cardGrid}>
        <ListaInstitucion/>
      <Paper style={style.breadcrumbs}>
                <Grid item xs={12} sm={12}>
            <Breadcrumbs aria-label="breadcrumbs">
            <Link color="textSecondary" style={style.link} href="/" >
                                    <HomeIcon style={style.icon} />
                                     Municipalidad de Buena Vista 
                                </Link>
                                <Link color="inherit" style={style.link} href="/consejales" >
                                    <AssignmentIndIcon style={style.icon} />
                                     Consejales 
                                </Link>
              
            </Breadcrumbs>
          </Grid>
      </Paper>
      <Paper style={style.paper}>
        <Typography  variant="h4"  color="textSecondary">
          Consejales de la <br/> Honorable Junta Municipal
        </Typography>
        <div style={style.div} ></div>
        <Grid container spacing={3}>
        <Grid item  xs={12} sm={4} md={3}>
        <Card style={style.root}>
        <CardMedia
        style={style.cardMedia}
          title="consejal"
          image={fotoCon}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Ing. Emmanuel Ortigoza
          </Typography>
          <Typography variant="overline">
            Presidente de la Junta Municipal
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Consejal Municipal
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item  xs={12} sm={4} md={3}>
        <Card style={style.root}>
        <CardMedia
        style={style.cardMedia}
          title="consejal"
          image={fotoCon}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Ing. Emmanuel Ortigoza
          </Typography>
          <Typography variant="overline">
            .
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Consejal Municipal
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item  xs={12} sm={4} md={3}>
        <Card style={style.root}>
        <CardMedia
        style={style.cardMedia}
          title="consejal"
          image={fotoCon}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Ing. Emmanuel Ortigoza
          </Typography>
          <Typography variant="overline">
            .
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Consejal Municipal
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item  xs={12} sm={4} md={3}>
        <Card style={style.root}>
        <CardMedia
        style={style.cardMedia}
          title="consejal"
          image={fotoCon}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Ing. Emmanuel Ortigoza
          </Typography>
          <Typography variant="overline">
            .
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Consejal Municipal
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item  xs={12} sm={4} md={3}>
        <Card style={style.root}>
        <CardMedia
        style={style.cardMedia}
          title="consejal"
          image={fotoCon}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Ing. Emmanuel Ortigoza
          </Typography>
          <Typography variant="overline">
            .
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Consejal Municipal
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item  xs={12} sm={4} md={3}>
        <Card style={style.root}>
        <CardMedia
        style={style.cardMedia}
          title="consejal"
          image={fotoCon}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Ing. Emmanuel Ortigoza
          </Typography>
          <Typography variant="overline">
            .
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Consejal Municipal
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item  xs={12} sm={4} md={3}>
        <Card style={style.root}>
        <CardMedia
        style={style.cardMedia}
          title="consejal"
          image={fotoCon}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Ing. Emmanuel Ortigoza
          </Typography>
          <Typography variant="overline">
            .
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Consejal Municipal
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item  xs={12} sm={4} md={3}>
        <Card style={style.root}>
        <CardMedia
        style={style.cardMedia}
          title="consejal"
          image={fotoCon}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Ing. Emmanuel Ortigoza
          </Typography>
          <Typography variant="overline">
            .
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Consejal Municipal
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item  xs={12} sm={4} md={3}>
        <Card style={style.root}>
        <CardMedia
        style={style.cardMedia}
          title="consejal"
          image={fotoCon}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Ing. Emmanuel Ortigoza
          </Typography>
          <Typography variant="overline">
            .
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Consejal Municipal
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item  xs={12} sm={4} md={3}>
        <Card style={style.root}>
        <CardMedia
        style={style.cardMedia}
          title="consejal"
          image={fotoCon}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Ing. Emmanuel Ortigoza
          </Typography>
          <Typography variant="overline">
            .
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Consejal Municipal
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item  xs={12} sm={4} md={3}>
        <Card style={style.root}>
        <CardMedia
        style={style.cardMedia}
          title="consejal"
          image={fotoCon}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Ing. Emmanuel Ortigoza
          </Typography>
          <Typography variant="overline">
            .
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Consejal Municipal
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        </Grid>
        </Paper>
      </Container>
    )
  }
}
