import React, { Component } from 'react';
import {revisarPresupuesto} from '../helper';

class Restante extends Component {
    render() {

        const presupuesto = this.props.presupuesto;
        const restante = this.props.restante;

        return(
            <div className={revisarPresupuesto(presupuesto, restante)}>
                <span>Restante: $
                    {this.props.restante}
                </span>
            </div>
        )
    }
}

export default Restante;