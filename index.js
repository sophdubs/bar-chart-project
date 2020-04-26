// Selector to grab the root element which will be used to access and update CSS variables to customize bar chart.
let root = document.documentElement;

//Helper function to determine the max value in the input dataset
const findMaxValue = function(data) {
  let max = 0;
  for (let i = 0; i < data.barData.length; i++) {
    for (let j = 0; j < data.barData[0].length; j++) {
      if (data.barData[i][j] > max) {
        max = data.barData[i][j];
      }
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
  console.log('tickspacing', tickSpacing);
  console.log('maxHeight', maxHeight);
  console.log('height', height);
  if (!tickSpacing) {
    return;
  } else {
    let tickPixels = height / (maxHeight / tickSpacing);
    let sum = maxHeight;
    while (sum > 0) {
      $('.ticks').append(`<li class="tick"></li>`);
      $('.tick-nums').append(`<li class="tick-num">${sum}</li>`);
      sum -= Number(tickSpacing);
    }
    root.style.setProperty('--tickPixels', tickPixels + 'px');
    return;
  }
};

// Add bars to graph and customize them to user input. Bar width is id dependent on total amout of values passed in.
// Customization include position of values within the bars, barColour, valueColour and spacing between bars
const addCustomBars = function(data, specs) {
  // Destructure values from specs object to easily access them
  const {height, width, maxHeight, valuePos, barSpacing, barColour, valueColour}  = specs;
  //Creating bars in bar chart from input data
  //Setting height of bars inline based on data inputs


  // for (let i = 0; i < data.length; i++) {
  //   const barHeight = (data[i][1] * height) / maxHeight;
  //   $('.bar-list').append(`<div class="barDiv"><li class="bar ${valuePos}" style="height: ${barHeight}px"><p class="value">${data[i][1]}</p><p class="bar-label">${data[i][0]}</p></li></div>`);
  // }
  for (let i = 0; i < data.barData.length; i++) {
    let str = '';
    for (let j = 0; j < data.barData[0].length; j++) {
      let barHeight = (data.barData[i][j] * height) / maxHeight;
      str += `<li class="bar ${valuePos}" style="height:${barHeight}px"><p class="value">${data.barData[i][j]}</p></li>`;
    }
    $('.bar-list').append('<div class="barDiv">' + str + '</div>');
  }






  // Default Settings for bar spacing and width of bars if user did not specify
  // const numBars = data.length;
  // let barMargin = (Math.floor(Number(width) / numBars) * 0.20) / 2;
  // let barWidth = Math.floor(Number(width) / numBars) - (barMargin * 2);
  // // Override default settings if user provided barSpacing
  // if (barSpacing) {
  //   const space = Number(barSpacing.substring(0, barSpacing.length - 2));
  //   const diff = width - (numBars * space);
  //   barMargin = space / 2;
  //   barWidth = diff / numBars;
  // }
  // Set bar spacing and bar width
  // root.style.setProperty('--barWidth', `${barWidth}px`);
  // root.style.setProperty('--barMargin', `${barMargin}px`);
  // Set custom colour for bars and bar values if customization was provided
  // if (barColour) {
  //   root.style.setProperty('--barColour', barColour);
  // }
  // if (valueColour) {
  //   root.style.setProperty('--valueColour', valueColour);
  // }
};

// If user provides a title, this function will add it to the page header displayed above the bar graph.
// Title colour and font size is customized if the user provides desired specifications.
const addCustomTitle = function(specs) {
  const {title, titleColour, titleFontSize, subtitle, subtitleColour, subtitleFontSize} = specs;
  if (title) {
    $('header').append(`<h1 class="title">${title}</h1>`);
    if (titleColour) {
      root.style.setProperty('--titleColour', titleColour);
    }
    if (titleFontSize) {
      root.style.setProperty('--titleFontSize', titleFontSize);
    }
  }
  if (subtitle) {
    $('header').append(`<h2 class="subtitle">${subtitle}</h2>`);
    if(subtitleColour) {
      root.style.setProperty('--subtitleColour', subtitleColour);
    }
    if (subtitleFontSize) {
      root.style.setProperty('--titleFontSize', titleFontSize);
    }
  }
};

// If user provided x-axis and y-axis subtitles, they are added to the graph.
const addCustomAxes = function(yAxis, xAxis) {
  if (yAxis) {
    $('.y-axis').append(`<p>${yAxis}</p>`);
  }
  if(xAxis) {
    $('.x-axis').append(`<p>${xAxis}</p>`);
  }
};

// If user provides a custom colour for the labels, function sets the label to that colour.
const customizeLabels = function(labelColour) {
  if(labelColour) {
    root.style.setProperty('--labelColour', labelColour);
  }
};


const drawBarChart = function(data, options, element){
  // Destructuring options for use in helper functions
  const {height, width, tickSpacing, valuePos, barSpacing, barColour, valueColour, title, titleColour, titleFontSize, subtitle, subtitleColour, subtitleFontSize, yAxis, xAxis, labelColour} = options;
  const maxValue = findMaxValue(data);
  const maxHeight = findMaxHeight(maxValue, tickSpacing);

  // Setting width and height of bar chart based on passed in options.
  generateBlankGraph(height, width);
  // Adding ticks to graph's Y axis based on custom tickSpacing passed in by user
  addCustomTicks(tickSpacing, maxHeight, height);
  // Add bars to graph and customize them to user input
  // Customization include position of values within the bars, barColour, valueColour and spacing between bars

  // addCustomBars(data, {height, width, maxHeight, valuePos, barSpacing, barColour, valueColour});

  //Sets title/subtitle and title/subtitle customizations if user provides title, subtitlem custom colours and fonts sizes.
  // addCustomTitle({title, titleColour, titleFontSize, subtitle, subtitleColour, subtitleFontSize});
  // Adds bar chart axes if user provides them
  // addCustomAxes(yAxis, xAxis);
  // label colour can be customized if user specifies desired colour
  // customizeLabels(labelColour);
};


// const chartData = [['first', 1], ['second', 2], ['third', 3], ['fourth', 4], ['fifth', 5], ['sixth', 6], ['seventh', 7], ['eighth', 8]];
// const chartOptions = {
//   height: '400',
//   width: '600',
//   tickSpacing: '3',
//   valuePos: 'top',
//   valueColour: '#000000',
//   barSpacing: '30px',
//   barColour: '#eb4034',
//   title: 'This is the title',
//   titleColour: '#eb4034',
//   titleFontSize: '40px',
//   subtitle: 'This is the subtitle',
//   subtitleColour: '#000000',
//   subtitleFontSize: '20px',
//   xAxis: 'x axis label',
//   yAxis: 'y axis label',
//   labelColour: 'blue'
// };
// const chartElement = $(".bar-chart");

// drawBarChart(chartData, chartOptions, chartElement);
