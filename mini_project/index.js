function draw(data) {
      
      /*
        D3.js setup code
      */
    var margin = 75;
    var width = 1400 - margin;
    var height = 600 - margin;

      /* Find body tag, append svg, and add chart group tag*/
    var svg = d3.select("body") 
      .append("svg")
        .attr("width", width + margin)
        .attr("height", height + margin)
      .append("g")
        .attr("class","chart");

      /*
        Dimple.js Chart construction code
      */

      var myChart = new dimple.chart(svg, data); 
      x = myChart.addCategoryAxis("x", "");
      y = myChart.addMeasureAxis("y", "Share of Global Spending (%)");
      myChart.addSeries(null, dimple.plot.bar);
      myChart.draw();
    };

d3.csv("data.csv", draw); 
