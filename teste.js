var options = {
    chart: {
        defaultSeriesType: 'spline'
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'Units'
        }
    },
    series: []
};


Highcharts.ajax({  
    url: 'data.csv',  
    dataType: 'text',  
    success: function(data) {  
        // Split the lines  
        var lines = data.split('\n');  
        lines.forEach(function(line, lineNo) {  
            var items = line.split(',');  
              
            // header line containes categories  
            if (lineNo == 0) {  
                items.forEach(function(item, itemNo) {  
                    if (itemNo > 0) options.xAxis.categories.push(item);  
                });  
            }  
              
            // the rest of the lines contain data with their name in the first position  
            else {  
                var series = {   
                    data: []  
                };  
                items.forEach(function(item, itemNo) {  
                    if (itemNo == 0) {  
                        series.name = item;  
                    } else {  
                        series.data.push(parseFloat(item));  
                    }  
                });  
                  
                options.series.push(series);  
    
            }  
              
        });  
          
        Highcharts.chart('container', options);  
    },  
    error: function (e, t) {  
        console.error(e, t);  
    }  
});