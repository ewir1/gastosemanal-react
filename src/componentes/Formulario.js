import React, { Component } from 'react'

class Formulario extends Component {

    // Ref para los campos de formulario
    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();

    crearGasto = (e) => {
        // Prevenir el default
        e.preventDefault();

        // Crear el objeto con los datos
        const gasto = {
           nombreGasto: this.nombreGastoRef.current.value,
           cantidadGasto: this.cantidadGastoRef.current.value
        }

        // console.log(gasto);
        
        // Agragarlo y enviarlo por props
        this.props.agregarGasto(gasto);

        // Resetear el formulario(Opcional)
    }

    render() {
        return(
            <form onSubmit={this.crearGasto}>
                <h5>Agrega tus gastos aqui</h5>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.nombreGastoRef} className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.cantidadGastoRef} className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }
}

export default Formulario;