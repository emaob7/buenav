import React, { Component } from 'react';
import { consumerFirebase } from '../../../../server';
import { Paper, Container, Grid, Breadcrumbs, Avatar, Typography } from '@material-ui/core';
import MuseumIcon from '@material-ui/icons/Museum';
import logo from "../../../../logo.svg";
import Card from '@material-ui/core/Card';


import CardContent from '@material-ui/core/CardContent';


const style={
    container: {
        paddingTop : "8px"
    },
    paper: {
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fafafa"
    },
    typography: {
       
        fontSize: '120%',
      },
      div:{
        marginRight: "auto",
        marginLeft: "auto",
        backgroundColor: "#0071bc",
        width : 800,
        height: 5,

      },
    paper2: {
        display: 'flex',
        padding: "15px",
        textAlign: 'left',
        alignItems: "right",
        color:'#fff',
        backgroundColor: "#546e7a"
        
      },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
      },
      cardMedia: {
       
        paddingTop: "100%",
        marginRight: 'auto',
      },
        
    root: {
        maxWidth: 745,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    link: {
        padding: "20px",
        backgroundColor: "#fafafa"
    },
    homeIcon:{
        width: 20,
        height:20,
        marginRight: "4px"
    },
    submit:{
        marginTop: -25,
        marginBottom:25
    },
    avatar : {
        
        margin: 10,
        width : 200,
        height: 200,
        
      },
      divavatar :{
        position:"relative"
      }
}

class Intendente extends Component {
    state = {
        ListIntendentes : []
     }


    async componentDidMount() {
        let objectQuery = this.props.firebase.db.collection("Intendentes");
        const snapshot = await objectQuery.get();
        const arrayIntendentes = snapshot.docs.map(doc => {
            let data = doc.data();
            let id = doc.id;
            return {id, ...data};
        })
        this.setState({
            ListIntendentes:arrayIntendentes
        })
    }

    
        

     render(){
         return (
            <Container style={style.Paper}>
                <Paper style={style.paper}>

                    <Grid item xs={12} sm={8}>
                        <Grid container spacing={4}>
                            {this.state.ListIntendentes.map(card =>
                              <Grid item key={card.id} xs={12} sm={6} md={12}>
                                  <Paper style={style.paper2}>
                    <Grid container direction="row"
                                    justify="flex-end"
                                    alignItems="flex-end" spacing={4}>
                        <Grid item  spacing={1}>
                                  <Typography gutterBottom variant="h4">
                                            {card.nombreIn}
                                        </Typography>
                                        <div style={style.submit}>
                                        <Typography gutterBottom variant="overline" style={style.typography} >
                                            {card.municipio}
                                        </Typography>
                                        </div>
                                        <Typography gutterBottom variant="body2">
                                            {card.direccion}
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle2">
                                            {card.correoIn}
                                        </Typography>
                                        </Grid>
                                        <Grid item  xs={12} sm={4}>
                                            <div style={style.divavatar}>
                                  <Avatar  style={style.avatar} src={card.fotos || logo} />
                                  </div>
                                  </Grid>
                                  </Grid>
                                  </Paper>
                                  <Card>
                                <div style={style.div} ></div>
                                    <CardContent style={style.CardContent}>
                                       
                                        <Typography gutterBottom variant="body1">
                                            {card.descripcion}
                                        </Typography>
                                        
                                    </CardContent>
                                    <div style={style.div} ></div>
                                  </Card>
                              </Grid>
                                )}

                        </Grid>

                    </Grid>
                </Paper>

            </Container>
         )
     }


}

export default consumerFirebase(Intendente);