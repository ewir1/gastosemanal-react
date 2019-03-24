import React, { Component } from 'react'

class Presupuesto extends Component {
    render() {
        return(
            <div className="alert alert-primary">
                <span>Presupuesto: $
                    {this.props.presupuesto}
                </span>
            </div>
        )
    }
}

export default Presupuesto;