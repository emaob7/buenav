import { Container } from '@material-ui/core';
import React, { Component } from 'react'
import ListaCiudad from "../../../Layout/Bar/listas/ListaCiudad";
import Checkout from '../../../vistas/checkout/Checkout';


export default class Historia extends Component {
    render() {
        return (
            <div>
                <Container>
                <ListaCiudad/>
                historia
                <Checkout/>
                </Container>
            </div>
        )
    }
}
