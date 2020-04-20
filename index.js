let root = document.documentElement;
const drawBarChart = function(data, options, element){
  // Setting width and height of bar chart based on passed in options.
  root.style.setProperty('--height', options.height);
  root.style.setProperty('--width', options.width);

  //Creating bars in bar chart from input data

  for (let i = 0; i < data.length; i++) {
    $('.bar-list').append(`<li>${data[i]}</li>`);
  }

  //Setting width and height of bars based on data inputs

};

const chartData = [1, 2, 3, 4];
const chartOptions = {
  height: '400px',
  width: '600px'
};
const chartElement = $(".bar-chart");


drawBarChart(chartData, chartOptions, chartElement);
