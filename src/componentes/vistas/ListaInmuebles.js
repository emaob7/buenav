import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


export default class ListaInmuebles extends Component {
    render() {
        return (
            <div>
                <Button varian ='contained' color='primary' > Color primario</Button>
                <Button varian ='contained' color='secondary' > Color secundario</Button>
            </div>
        )
    }
}
