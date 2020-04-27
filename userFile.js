// Use this file to create your custom Bar Chart
// Fill in the following with your own data and preferences
// Required fields are indicated
// If you have no customization for a field that is not required, simply leave as null and default settings will be used.

// const chartData = [['first', 1], ['second', 2], ['third', 3], ['fourth', 4], ['fifth', 5], ['sixth', 6], ['seventh', 7], ['eighth', 8]];

const chartOptions = {

  height: '300',
  width: '600',
  barColour: '#eb4034',
  barSpacing: '30px',
  valueColour: '#000000',
  labelColour: 'blue',
  title: 'This is the title',
  titleColour: '#eb4034',
  titleFontSize: '40px',
  subtitle: 'This is the subtitle',
  subtitleColour: '#000000',
  subtitleFontSize: '20px',
  xAxis: 'x axis label',
  yAxis: 'y axis label',
  tickSpacing: '10000'
};



const chartData2 = {
  'barData': [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]],
  'barLabels': ['Belgium', 'Switzerland', 'United Kingdom', 'Iran', 'France', 'Germany', 'Mainland China', 'Spain', 'Italy', 'United States'],
  'barColors': ['red', 'grey'],
  'legend': ['Cases', 'Deaths']
};

const chartData4 = {
  'barData': [[1010, 8979, 28379], [1195, 9729, 30106], [1310, 10560, 31927], [1470, 11207, 33383], [1587, 11843, 35056], [1690, 12586, 36831], [1834, 13188, 38422], [1974, 13986, 40190], [2146, 14761, 42110], [2302, 15541, 43888]],
  'barLabels': [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  'barColors': ['red', 'blue', 'grey'],
  'legend': ['Deaths', 'Recoveries', 'Cases']
};

const chartElement = $(".bar-chart");

drawBarChart(chartData4, chartOptions, chartElement);



// const chartData = [['first', 1], ['second', 2], ['third', 3], ['fourth', 4], ['fifth', 5], ['sixth', 6], ['seventh', 7], ['eighth', 8]];

