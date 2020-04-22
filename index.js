// Selector to grab the root element which will be used to access and update CSS variables to customize bar chart.
let root = document.documentElement;

//Helper function to determine the max value in the input dataset
const findMaxValue = function(data) {
  let max = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i][1] > max) {
      max = data[i][1];
    }
  }
  return max;
};

//Helper function to determine the max value on the Y axis.
//If user provided tick spacing, it will be the closest multiple of the provided tick spacing greater or euqal than the max val.
//If no tick spacing is provided, the max value on the Y axis will be the Max value in the dataset.
const findMaxHeight = function(maxValue, tickSpacing) {
  if (tickSpacing) {
    return Math.ceil(maxValue / tickSpacing) * tickSpacing;
  } else {
    return maxValue;
  }
};

// Fuction sets width and height of bar chart based on customized values passed in by the user.
const generateBlankGraph = function(height, width) {
  root.style.setProperty('--height', `${height}px`);
  root.style.setProperty('--width', `${width}px`);
};

// Function that adds ticks to the Y axis with custom spacing specified by the user.
// If no spacing is provided, no ticks are added to the graph's Y axis.
const addCustomTicks = function(tickSpacing, maxHeight, height) {
  if (!tickSpacing) {
    return;
  } else {
    let tickPixels = height / (maxHeight / tickSpacing);
    let sum = maxHeight;
    while (sum > 0) {
      $('.ticks').append(`<li class="tick">${sum}</li>`);
      sum -= Number(tickSpacing);
    }
    root.style.setProperty('--tickPixels', tickPixels + 'px');
    return;
  }
};


const drawBarChart = function(data, options, element){
  // Destructuring options for use in helper functions
  const {height, width, tickSpacing} = options;
  const maxValue = findMaxValue(data);
  const maxHeight = findMaxHeight(maxValue, tickSpacing);



  // Setting width and height of bar chart based on passed in options.
  generateBlankGraph(height, width);
  // Adding ticks to graph's Y axis based on custom tickSpacing passed in by user
  addCustomTicks(tickSpacing, maxHeight, height);

  //Creating bars in bar chart from input data
  //Setting heigh of bars inline based on data inputs
  // const maxHeight = options.height * 0.9;
  // const maxVal = findMax(data);

  for (let i = 0; i < data.length; i++) {
    const barHeight = (data[i][1] * height) / maxHeight;
    $('.bar-list').append(`<div class="barDiv"><li class=" bar ${options.valuePos}" style="height: ${barHeight}px"><p class="value">${data[i][1]}</p><p class="bar-label">${data[i][0]}</p></li></div>`);
  }

  // Setting width of bars based on data inputs
  const numBars = data.length;
  if (options.barSpacing) {
    const space = Number(options.barSpacing.substring(0, options.barSpacing.length - 2));
    const diff = options.width - (data.length * space);
    const barMargin = space / 2;
    const barWidth = diff / data.length;
    root.style.setProperty('--barWidth', `${barWidth}px`);
    root.style.setProperty('--barMargin', `${barMargin}px`);
  } else {
    const barMargin = Math.floor(Number(options.width) / numBars) * 0.20;
    const barWidth = Math.floor(Number(options.width) / numBars) - barMargin;
    root.style.setProperty('--barWidth', `${barWidth}px`);
    root.style.setProperty('--barMargin', `${Math.floor(barMargin / 2)}px`);
  }

  // Set colour of bars based on passed in options
  root.style.setProperty('--barColour', options.barColour);
  root.style.setProperty('--valueColour', options.valueColour);

  //Set title
  if (options.title) {
    $('header').append(`<h1 class="title">${options.title}</h1>`);
    root.style.setProperty('--titleColour', options.titleColour);
    root.style.setProperty('--titleFontSize', options.titleFontSize);
  }

  // Set chart axes {
  if (options.yAxis) {
    $('.y-axis').append(`<p>${options.yAxis}</p>`);
  }
  if(options.xAxis) {
    $('.x-axis').append(`<p>${options.xAxis}</p>`);
  }


  //Set labels
  // root.style.setProperty('--labelColour', options.labelColour);
};


const chartData = [['first', 1], ['second', 2], ['third', 3], ['fourth', 4], ['fifth', 5], ['sixth', 6], ['seventh', 7], ['eighth', 8]];
const chartOptions = {
  height: '400',
  width: '600',
  tickSpacing: '3',
  valuePos: 'top',
  valueColour: '#000000',
  barSpacing: '30px',
  barColour: '#eb4034',
  title: 'This is the title',
  titleColour: '#eb4034',
  titleFontSize: '40px',
  xAxis: 'x axis label',
  yAxis: 'y axis label',
};
const chartElement = $(".bar-chart");


drawBarChart(chartData, chartOptions, chartElement);
