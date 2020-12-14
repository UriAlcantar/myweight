import React from 'react';
import Highcharts from 'highcharts';
import * as moment from 'moment';
moment.locale('es')

class Grafica extends React.Component {


    componentDidMount() {
        this.iniciarGrafica(this.props.registros);
    }

    componentWillReceiveProps(nextProps) {
        this.iniciarGrafica(nextProps.registros)
    }

    iniciarGrafica =(registros) => {
        Highcharts.chart('grafico', {
            title: {
              text: 'Mi registro de peso'
            },
            xAxis: {
              type: 'datetime'
            },
            chart: {
              type: 'line'
          },
            series : [
              {
                name: 'test',
                data: registros
              }
            ]
          })
    }
    render() {
        return (
            <div id="grafico" className="z-depth-2 hoverable"></div>
        )
    }
}

export default Grafica;