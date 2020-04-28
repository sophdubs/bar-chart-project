// Use this file to create your custom Bar Chart
// Fill in the following with your own data and preferences
// If you have no customization for a field that is not required, simply leave as null and default settings will be used.

const chartData = {
  'barData': [],
  'barLabels': [],
  'barColors': [],
  'legend': []
};

const chartOptions = {
  height: null,
  width: null,
  barSpacing: null,
  valueColour: null,
  labelColour: null,
  title: null,
  titleColour: null,
  titleFontSize: null,
  subtitle: null,
  subtitleColour: null,
  subtitleFontSize: null,
  xAxis: null,
  yAxis: null,
  tickSpacing: null
};

const chartElement = $(".bar-chart");

drawBarChart(chartData, chartOptions, chartElement);





