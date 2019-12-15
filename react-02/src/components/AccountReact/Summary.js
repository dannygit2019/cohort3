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
    let accName = this.props.array.sort((a,b) => {
        return b.initialBalance - a.initialBalance;
    });
    let nameFromHighest =accName.map((arr) => {
        return arr.accountName;
    });
    let balFromHighest =accName.map((arr) => {
      return arr.initialBalance;
    });

    const options = {
      chart: {
        id: "basic-bar",
      },
      title: {
        text: "ACCOUNTS REPORT BY HIGHEST BALANCE",
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
          text: "ACCOUNT NAME",
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
          text: "BALANCE",
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
        name: "Account Bal",
        data: balFromHighest //accBal
      }
    ]

    return (
      // <div className="app" hidden={this.state.hideThisChart}>
      <div className="app" hidden={this.state.hideThisChart}>
        <div><input style={{marginTop:"5px",marginRight: "202px", backgroundColor: "lightgrey"}} type="submit" value="Close" className="btnAcct btnCloseBlack" name="hide" onClick={() => {this.props.toHide(this.props.index)}} /></div>
        <div className="row">
          {/* <input type="submit" value="EXIT" className="btnAcct" name="exit" onClick={() => {this.props.exit(this.props.index)}} /> */}
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
