import React, { Component } from 'react';
import BarraTitulo from './components/BarraTitulo';
import * as moment from 'moment';
import 'moment/locale/es';
import Grafica from './components/Grafica';
import Tabla from './components/Tabla';
import Form from './components/Form'

moment.locale('es')

class App extends Component {
  state = {
    registros: [],
    modal: false
  }
  componentDidMount() {
    const storageRecovered = localStorage.getItem('registros');
    if (storageRecovered) {
      this.setState({
        registros: JSON.parse(storageRecovered)
      })
    }
  }


  cerrarForm = () => {
    this.setState({modal:false});
  }


  aceptarRegistro = ({fecha, peso}) => {
    const nuevoRegistro = [fecha, +peso];
    const newStateRegistros = [...this.state.registros, nuevoRegistro]
    localStorage.setItem('registros', JSON.stringify(newStateRegistros))
    this.setState({
      registros: newStateRegistros
    })
  }

  reiniciarRegistros = () => {
    localStorage.clear()
    this.setState({
      registros: []
    })
  }

  render() {
  const btnAdd = {
    position: 'fixed',
    top: '10%',
    right: '1%'
  }
  const noMargin = {
    marginTop: '0px !important'
  }


    return(
      <div>
        <BarraTitulo/>
        <Form 
        onCerrar={this.cerrarForm}
        visible={this.state.modal}
        onAceptar={this.aceptarRegistro}/>
        <main>
          <div className="valign-wrapper">
            <h4>Registro diario de peso</h4>
          </div>
          <div className="row" style={noMargin}>
            <div className="col s12 m6 l6">
              <Grafica registros={this.state.registros} />
              <a className="btn" onClick={this.reiniciarRegistros}>Reiniciar Registros</a>
            </div>
            <div className="col s12 m6 l6">
             <Tabla registros={this.state.registros} />
            </div>
          </div>
          <a 
            className="btn-floating btn-large waves-effect waves-light red z-depth-2 hoverable"
            onClick={() => {this.setState({modal:true})}}
            style={btnAdd}><i className="material-icons">add</i></a>
        </main>
      </div>
    )
  }
}

export default App;