import React from 'react';

var LineChart = require("react-chartjs").Line;

const chartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 0
  }]
};

const chartOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
}

var ChartComponent = React.createClass({
  render: function() {
    return <LineChart data={chartData} options={chartOptions} width="1100px" height="500px"/>
  }
});



const EventDetails = ({ data = [{}] }) => (
  <main className="event-details">
    <h2 className="event-name">Event Title</h2>
    <div  className="chart">
      <ChartComponent></ChartComponent>
    </div>
    <h4 className="list-title">List of events</h4>
    <ul className="specific-event-list">
      <li className="specific-event-list--list-item">Grant Harris | me@grantharr.is | ID-98SJ2290AS</li>
      <li className="specific-event-list--list-item">Grant Harris | me@grantharr.is | ID-98SJ2290AS</li>
      <li className="specific-event-list--list-item">Grant Harris | me@grantharr.is | ID-98SJ2290AS</li>
      <li className="specific-event-list--list-item">Grant Harris | me@grantharr.is | ID-98SJ2290AS</li>
      <li className="specific-event-list--list-item">Grant Harris | me@grantharr.is | ID-98SJ2290AS</li>
      <li className="specific-event-list--list-item">Grant Harris | me@grantharr.is | ID-98SJ2290AS</li>
      <li className="specific-event-list--list-item">Grant Harris | me@grantharr.is | ID-98SJ2290AS</li>
      <li className="specific-event-list--list-item">Grant Harris | me@grantharr.is | ID-98SJ2290AS</li>
      <li className="specific-event-list--list-item">Grant Harris | me@grantharr.is | ID-98SJ2290AS</li>
    </ul>
  </main>
);

export default EventDetails;
