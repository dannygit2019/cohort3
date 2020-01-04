// Using React-ApexCharts component -
// In order to use it - run the followiing command:
// npm install --save react-apexcharts apexcharts

import React, { Component } from "react";
import Chart from "react-apexcharts"; // make sure to import this

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideThisChart: this.props.display
    }
  }

  handleChart = () => {
    this.setState({
      hideThisChart: true
    })
  }

  render() {
    let cityName = this.props.array.sort((a,b) => {
        return b.Population - a.Population;
    });
    let nameFromHighest =cityName.map((arr) => {
        return arr.Name;
    });
    let popFromHighest =cityName.map((arr) => {
      return arr.Population;
    });

    const options = {
      chart: {
        id: "basic-bar",
      },
      title: {
        text: "CITIES REPORT BY HIGHEST POPULATION",
        align: 'center',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '20px',
          color:  'brown'//'#263238'
        },
    },
      xaxis: {
        categories: nameFromHighest,
        labels: {
          show: true,
          rotate: 0,
          rotateAlways: true,
          hideOverlappingLabels: true,
          trim: true,
          style: {
              colors: "darkblue",
              fontSize: '15px',
              //fontFamily: 'Helvetica, Arial, sans-serif',
              //cssClass: 'apexcharts-xaxis-label',
          },
          offsetX: 0,
          offsetY: 0,
        },
        title: {
          text: "CITY NAME",
          offsetX: 0,
          offsetY: 0,
          style: {
            color: "red",
            fontSize: '12px',
            //fontFamily: 'Helvetica, Arial, sans-serif',
            //cssClass: 'apexcharts-xaxis-title',
          },
        },
      },
      yaxis: {
        title: {
          text: "POPULATION",
          rotate: 90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: "red",
            fontSize: '12px',
            //fontFamily: 'Helvetica, Arial, sans-serif',
            //cssClass: 'apexcharts-yaxis-title',
          },
        },
        labels: {
          show: true,
          rotate: 0,
          rotateAlways: true,
          hideOverlappingLabels: true,
          trim: true,
          style: { 
              color: "darkblue",
              fontSize: '15px',
              //fontFamily: 'Helvetica, Arial, sans-serif',
              //cssClass: 'apexcharts-xaxis-label',
          },
          offsetX: 0,
          offsetY: 0,
        },
      }
    };
    const series = [
      {
        name: "City Pop",
        data: popFromHighest //city pop
      }
    ]

    return (
      <div className="app" hidden={this.state.hideThisChart}>
        <div><input style={{marginRight: "202px", backgroundColor: "lightgrey"}} type="submit" value="Close" className="btnCity btnCloseBlack" name="hide" onClick={() => {this.props.toHide(this.props.index)}} /></div>
        <div className="row">
          <br></br>
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="bar"
              width="800"
              height="350"
            />
          </div>
        </div>
      </div>
    );
  }
}

export { BarChart };
