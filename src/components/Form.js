import React from 'react'
import './Form.css';
import swal from 'sweetalert';


export default class From extends React.Component {
    state = {
        fecha: new Date(),
        peso: ''
    }
    onSubmit = (event) => {
        event.preventDefault();
 
        const { fecha, peso } = this.state;
        if (!peso || isNaN(peso) ||peso < 0) {
            swal('Lectura invalida', 'El registro de peso debe de ser valido', 'error')
        } else {
            console.log('cayo aquio');
            this.props.onAceptar(this.state)
        }

    }

    aceptarRegistro = ({fecha,peso}) => {
    }

    cambiarFecha = (fecha) => {
        this.setState({fecha: fecha.target.value})
    }

    cambiarPeso = (peso) => {
        this.setState({peso: peso.target.value})
    }
    render() {
        return(
            <div className="row">
                <div className={`form-container scale-transition scale-out ${this.props.visible ? 'scale-in' : ''} col s4 offset-s4 z-depth-4 cyan lighten-3`}>
                    <form onSubmit={this.onSubmit} >
                        <label htmlFor="fecha">
                            Fecha:
                            <input type="date" name="fecha" id="fecha" value={this.state.fecha} onChange={this.cambiarFecha} />
                        </label>
                        <label htmlFor="peso">
                            Peso:
                            <input type="text" name="peso" id="peso" value={this.state.peso} onChange={this.cambiarPeso} />
                        </label>
                        <input type="submit" className="btn" onClick={this.onSubmit} value="Agregar" />
                        <input type="button" className="btn" onClick={() => this.props.onCerrar()} value="Cerrar" />
                    </form>
                </div>
            </div>
        )
    }
}