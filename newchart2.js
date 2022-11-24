// Data retrieved from https://www.vikjavev.no/ver/snjomengd
Highcharts.setOptions({
    lang: {
        months: ['Jan', 'Fév', 'Mar', 'Abr', 'Mai', 'Jun',  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    }
});
Highcharts.chart('container', {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Geração de energia  Eólica por Usina(MWmed)'
  },
  subtitle: {
    text: 'Energia Eólica gerada a cada hora do dia - (30/03/22 & 31/03/22)'
  },
  xAxis: {
    alternateGrid: 'true',
    styledMode: 'true',
    type: 'datetime',
    alternateGridColor: '#FBFDFF',
    
   
    

    dateTimeLabelFormats: { // don't display the year
      month: '%e. %b',
      year: '%b',
      
    },
    title: {
      text: 'Data'
      
      
    }
  },
  yAxis: {
    
    title: {
      text: 'Geração(MWmed)',
      style: {
                color: 'grey'
            },  
    },
    
  },
  //tooltip: {
    //headerFormat: '<b>{series.name}</b><br>',
    //pointFormat: '{point.x:%e. %b}: {point.y:.2f} MWmed'  
  //},

  tooltip: {
    
        pointFormat: '{series.name}: <b>{point.y:.2f} MWmed</b><br/>',
        valueSuffix: ' MWmed',
        shared: true,
    },


  plotOptions: {
    series: {
      marker: {
        enabled: true,
        radius: 2.5,
         inside: true,
      }
    }
  },

  colors: ['#3772BA', '#FF6A4A', '#3772BA', '#FF6A4A', '#239B56','#FF6A4A', '#239B56', '#FF6A4A'],

  // Define the data points. All series have a year of 20222022/71 in order
  // to be compared on the same x axis. Note that in JavaScript, months start
  // at 0 for January, 1 for February etc.
  series: [
    {
      
      name: [("Icaraí - 30/03")],
      
      
      data: [
        [Date.UTC(2022, 2, 30, 00), 0.547],[Date.UTC(2022, 2, 30, 1), 3.64],[
          Date.UTC(2022, 2, 30, 2), 14.71],[Date.UTC(2022, 2, 30, 3), 18.477],
          [Date.UTC(2022, 2, 30, 4), 13.477],[Date.UTC(2022, 2, 30, 5), 9.87],
          [Date.UTC(2022, 2, 30, 6), 32.69],[Date.UTC(2022, 2, 30, 7), 100.2],
          [Date.UTC(2022, 2, 30, 8), 40.10],[Date.UTC(2022, 2, 30, 9), 59.16],
          [Date.UTC(2022, 2, 30, 10), 25.9],[Date.UTC(2022, 2, 30, 11), 9.949],
          [Date.UTC(2022, 2, 30, 12), 14.44],[Date.UTC(2022, 2, 30, 13), 12.98],
          [Date.UTC(2022, 2, 30, 14), 0.6],[Date.UTC(2022, 2, 30, 15), 7.14],
          [Date.UTC(2022, 2, 30, 16), 22.79],[Date.UTC(2022, 2, 30, 17), 45.66],
          [Date.UTC(2022, 2, 30, 18), 43.81],[Date.UTC(2022, 2, 30, 19), 42.12],
          [Date.UTC(2022, 2, 30, 20), 18.38],[Date.UTC(2022, 2, 30, 21), 20.57],
          [Date.UTC(2022, 2, 30, 22), 15.96],[Date.UTC(2022, 2, 30, 23), 22.5],
           ]
        
    },

    {
      name: [("Média Icaraí <br> 03/22")],
      showInLegend: true,
      
      data: [
        [Date.UTC(2022, 2, 30, 00),15.236],[Date.UTC(2022, 2, 30, 1), 10.756],
          [Date.UTC(2022, 2, 30, 2), 9.637],[Date.UTC(2022, 2, 30, 3), 8.585],
          [Date.UTC(2022, 2, 30, 4), 8.830],[Date.UTC(2022, 2, 30, 5), 9.456],
          [Date.UTC(2022, 2, 30, 6),11.889],[Date.UTC(2022, 2, 30, 7), 9.743],
          [Date.UTC(2022, 2, 30, 8), 8.401],[Date.UTC(2022, 2, 30, 9), 16.278],
          [Date.UTC(2022, 2, 30, 10), 22.7117],[Date.UTC(2022, 2, 30, 11), 31.850],
          [Date.UTC(2022, 2, 30, 12), 34.856],[Date.UTC(2022, 2, 30, 13), 37.771],
          [Date.UTC(2022, 2, 30, 14), 37.033],[Date.UTC(2022, 2, 30, 15), 31.910],
          [Date.UTC(2022, 2, 30, 16), 28.5],[Date.UTC(2022, 2, 30, 17), 23.81],
          [Date.UTC(2022, 2, 30, 18), 21.5],[Date.UTC(2022, 2, 30, 19), 20.75],
          [Date.UTC(2022, 2, 30, 20), 18.5],[Date.UTC(2022, 2, 30, 21), 16.056],
          [Date.UTC(2022, 2, 30, 22), 17.768],[Date.UTC(2022, 2, 30, 23), 16.011],
           ]
           
    },
    
    {
      name: [("Icaraí - 31/03")],
      data: [
        
        
           [Date.UTC(2022, 2, 31, 00), 44.521],[Date.UTC(2022, 2, 31, 01), 38.91],
           [Date.UTC(2022, 2, 31, 02), 43.17],[Date.UTC(2022, 2, 31, 03), 39.72],
           [Date.UTC(2022, 2, 31, 04), 18.94], [Date.UTC(2022, 2, 31, 05),16.00],
           [Date.UTC(2022, 2, 31, 06), 30.44],[Date.UTC(2022, 2, 31, 07), 10.11],
           [Date.UTC(2022, 2, 31, 08), 3.93],[Date.UTC(2022, 2, 31, 09), 11.37],
            [Date.UTC(2022, 2, 31, 10), 9.934],[Date.UTC(2022, 2, 31, 11), 52.35],
            [Date.UTC(2022, 2, 31, 12),0.56],[Date.UTC(2022, 2, 31, 13), 0.13],
            [Date.UTC(2022, 2, 31, 14), 0.74],[Date.UTC(2022, 2, 31, 15), 0.68],
            [Date.UTC(2022, 2, 31, 16), 0.68],[Date.UTC(2022, 2, 31, 17), 0.68],[
              Date.UTC(2022, 2, 31, 18), 0.68],[Date.UTC(2022, 2, 31, 19), 0.68],
              [Date.UTC(2022, 2, 31, 20), 0.68],[Date.UTC(2022, 2, 31, 21), 0.68],[
                Date.UTC(2022, 2, 31, 22), 0.68],[Date.UTC(2022, 2, 31, 23), 0.68],
        ]
    },


    {
   name: [("Média Icaraí <br> 03/22")],
   showInLegend: true,
      data: [
        [Date.UTC(2022, 2, 31, 00),15.236],[Date.UTC(2022, 2, 31, 1), 10.756],
          [Date.UTC(2022, 2, 31, 2), 9.637],[Date.UTC(2022, 2, 31, 3), 8.585],
          [Date.UTC(2022, 2, 31, 4), 8.831],[Date.UTC(2022, 2, 31, 5), 9.456],
          [Date.UTC(2022, 2, 31, 6),11.889],[Date.UTC(2022, 2, 31, 7), 9.743],
          [Date.UTC(2022, 2, 31, 8), 8.401],[Date.UTC(2022, 2, 31, 9), 16.278],
          [Date.UTC(2022, 2, 31, 10), 22.7117],[Date.UTC(2022, 2, 31, 11), 31.850],
          [Date.UTC(2022, 2, 31, 12), 34.856],[Date.UTC(2022, 2, 31, 13), 37.771],
          [Date.UTC(2022, 2, 31, 14), 37.033],[Date.UTC(2022, 2, 31, 15), 31.910],
          [Date.UTC(2022, 2, 31, 16), 28.5],[Date.UTC(2022, 2, 31, 17), 23.81],
          [Date.UTC(2022, 2, 31, 18), 21.5],[Date.UTC(2022, 2, 31, 19), 20.75],
          [Date.UTC(2022, 2, 31, 20), 18.5],[Date.UTC(2022, 2, 31, 21), 16.056],
          [Date.UTC(2022, 2, 31, 22), 17.768],[Date.UTC(2022, 2, 31, 23), 16.011],
           ]
    },

    
    {
      name: [("P. Formosa - 30/03")],
      data: [
        [Date.UTC(2022, 2, 30, 00), 0],[Date.UTC(2022, 2, 30, 1), 0],[
          Date.UTC(2022, 2, 30, 2), 0],[Date.UTC(2022, 2, 30, 3), 1,732],
          [Date.UTC(2022, 2, 30, 4), 1,411],[Date.UTC(2022, 2, 30, 5), 0.678],
          [Date.UTC(2022, 2, 30, 6), 0],[Date.UTC(2022, 2, 30, 7), 0],
          [Date.UTC(2022, 2, 30, 8), 0],[Date.UTC(2022, 2, 30, 9), 3,545],
          [Date.UTC(2022, 2, 30, 10), 7,865],[Date.UTC(2022, 2, 30, 11), 6,179],
          [Date.UTC(2022, 2, 30, 12), 3,272],[Date.UTC(2022, 2, 30, 13), 2,528],
          [Date.UTC(2022, 2, 30, 14), 0.718],[Date.UTC(2022, 2, 30, 15), 11,361],
          [Date.UTC(2022, 2, 30, 16), 26,966],[Date.UTC(2022, 2, 30, 17), 12.14],
          [Date.UTC(2022, 2, 30, 18), 19,589],[Date.UTC(2022, 2, 30, 19), 11,789],
          [Date.UTC(2022, 2, 30, 20), 7,029],[Date.UTC(2022, 2, 30, 21), 19,885],
          [Date.UTC(2022, 2, 30, 22), 20,081],[Date.UTC(2022, 2, 30, 23), 1,037],
           ]
        
    },


    {
      name: [("Média P. Form <br> 03/22")],
      data: [
        [Date.UTC(2022, 2, 30, 00),1.88],[Date.UTC(2022, 2, 30, 1), 2.29],
          [Date.UTC(2022, 2, 30, 2), 2.257],[Date.UTC(2022, 2, 30, 3), 2.58],
          [Date.UTC(2022, 2, 30, 4), 3.60],[Date.UTC(2022, 2, 30, 5), 5.31],
          [Date.UTC(2022, 2, 30, 6),5.7],[Date.UTC(2022, 2, 30, 7), 2.28],
          [Date.UTC(2022, 2, 30, 8), 2.39],[Date.UTC(2022, 2, 30, 9), 3.754],
          [Date.UTC(2022, 2, 30, 10), 7.838],[Date.UTC(2022, 2, 30, 11), 8.948],
          [Date.UTC(2022, 2, 30, 12), 14.204],[Date.UTC(2022, 2, 30, 13), 15.97],
          [Date.UTC(2022, 2, 30, 14), 21.2],[Date.UTC(2022, 2, 30, 15), 17.3],
          [Date.UTC(2022, 2, 30, 16), 17.68],[Date.UTC(2022, 2, 30, 17), 17.0],
          [Date.UTC(2022, 2, 30, 18), 16.15],[Date.UTC(2022, 2, 30, 19), 13.3],
          [Date.UTC(2022, 2, 30, 20), 10.2],[Date.UTC(2022, 2, 30, 21), 7.88],
          [Date.UTC(2022, 2, 30, 22), 5.33],[Date.UTC(2022, 2, 30, 23), 3.17],
           ]
           
    },
    {
      name: [("P. Formosa - 31/03")],
      data: [
        
        
           [Date.UTC(2022, 2, 31, 00), 0.014],[Date.UTC(2022, 2, 31, 01), 0],
           [Date.UTC(2022, 2, 31, 02), 0.286],[Date.UTC(2022, 2, 31, 03),1,019],
           [Date.UTC(2022, 2, 31, 04), 15,682],[Date.UTC(2022, 2, 31, 05), 3,137],
           [Date.UTC(2022, 2, 31, 06), 4,388],[Date.UTC(2022, 2, 31, 07), 4,3880.101],
           [Date.UTC(2022, 2, 31, 08), 0],[Date.UTC(2022, 2, 31, 09), 0],
            [Date.UTC(2022, 2, 31, 10), 0.634],[Date.UTC(2022, 2, 31, 11),3,925],
            [Date.UTC(2022, 2, 31, 12),25,703],[Date.UTC(2022, 2, 31, 13), 6,318],
            [Date.UTC(2022, 2, 31, 14), 0],[Date.UTC(2022, 2, 31, 15), 0],
            [Date.UTC(2022, 2, 31, 16), 0],[Date.UTC(2022, 2, 31, 17), 0],[
              Date.UTC(2022, 2, 31, 18), 0],[Date.UTC(2022, 2, 31, 19), 0],
              [Date.UTC(2022, 2, 31, 20), 0.578],[Date.UTC(2022, 2, 31, 21), 0],[
                Date.UTC(2022, 2, 31, 22), 0.302],[Date.UTC(2022, 2, 31, 23), 2,269],
        ]
    },    

    
    {
      name: [("Média P. Form <br> 03/22")],
      data: [
        [Date.UTC(2022, 2, 31, 00),1.88],[Date.UTC(2022, 2, 31, 1), 2.29],
          [Date.UTC(2022, 2, 31, 2), 2.257],[Date.UTC(2022, 2, 31, 3), 2.58],
          [Date.UTC(2022, 2, 31, 4), 3.60],[Date.UTC(2022, 2, 31, 5), 5.31],
          [Date.UTC(2022, 2, 31, 6),5.7],[Date.UTC(2022, 2, 31, 7), 2.28],
          [Date.UTC(2022, 2, 31, 8), 2.39],[Date.UTC(2022, 2, 31, 9), 3.754],
          [Date.UTC(2022, 2, 31, 10), 7.838],[Date.UTC(2022, 2, 31, 11), 8.948],
          [Date.UTC(2022, 2, 31, 12), 14.204],[Date.UTC(2022, 2, 31, 13), 15.97],
          [Date.UTC(2022, 2, 31, 14), 21.2],[Date.UTC(2022, 2, 31, 15), 17.3],
          [Date.UTC(2022, 2, 31, 16), 17.68],[Date.UTC(2022, 2, 31, 17), 17.0],
          [Date.UTC(2022, 2, 31, 18), 16.15],[Date.UTC(2022, 2, 31, 19), 13.3],
          [Date.UTC(2022, 2, 31, 20), 10.2],[Date.UTC(2022, 2, 31, 21), 7.88],
          [Date.UTC(2022, 2, 31, 22), 5.33],[Date.UTC(2022, 2, 31, 23), 3.17],
           ]
           
    },


    
        
  ]


  
});
Highcharts.setOptions({
    lang: {
        months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    }
});
Highcharts.chart('container2', {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Geração de energia  Solar por Usina(MWmed)'
  },
  subtitle: {
    text: 'Energia Solar gerada a cada hora do dia - (30/03/22 & 31/03/22)'
  },
  xAxis: {
    
    styledMode: 'true',
    type: 'datetime',
    alternateGrid: 'true',
    alternateGridColor: '#FBFDFF',
   
    

    dateTimeLabelFormats: { // don't display the year
      month: '%e. %b',
      year: '%b',
      
    },
    title: {
      text: 'Data'
      
      
    }
  },
  yAxis: {
    title: {
      text: 'Geração(MWmed)',
      style: {
                color: 'grey'
            },  
            
    },
    
  },
  //tooltip: {
    //headerFormat: '<b>{series.name}</b><br>',
    //pointFormat: '{point.x:%e. %b}: {point.y:.2f} MWmed'  
  //},

  tooltip: {
    
        pointFormat: '{series.name}: <b>{point.y:.2f} MWmed</b><br/>',
        valueSuffix: ' MWmed',
        shared: true,
    },


  plotOptions: {
    series: {
      marker: {
        enabled: true,
        radius: 2.5,
         inside: true,
      }
    }
  },

  colors: ['#3772BA', '#FF6A4A', '#3772BA', '#FF6A4A', '#239B56','#FF6A4A', '#239B56', '#FF6A4A'],

  // Define the data points. All series have a year of 20222022/71 in order
  // to be compared on the same x axis. Note that in JavaScript, months start
  // at 0 for January, 1 for February etc.
  series: [
    {
      
      name: [("Dracena - 30/03")],
      
      
      data: [
        [Date.UTC(2022, 2, 30, 00), 0],[Date.UTC(2022, 2, 30, 1), 0],[
          Date.UTC(2022, 2, 30, 2), 0],[Date.UTC(2022, 2, 30, 3), 0],
          [Date.UTC(2022, 2, 30, 4), 0],[Date.UTC(2022, 2, 30, 5), 0],
          [Date.UTC(2022, 2, 30, 6), 0.23],[Date.UTC(2022, 2, 30, 7), 14.917],
          [Date.UTC(2022, 2, 30, 8), 51.21],[Date.UTC(2022, 2, 30, 9), 62.13],
          [Date.UTC(2022, 2, 30, 10), 64.12],[Date.UTC(2022, 2, 30, 11), 63.979],
          [Date.UTC(2022, 2, 30, 12),56.6],[Date.UTC(2022, 2, 30, 13), 46.31],
          [Date.UTC(2022, 2, 30, 14), 20.2],[Date.UTC(2022, 2, 30, 15), 10.8],
          [Date.UTC(2022, 2, 30, 16), 19.34],[Date.UTC(2022, 2, 30, 17), 7.10],
          [Date.UTC(2022, 2, 30, 18), 0.36],[Date.UTC(2022, 2, 30, 19), 0],
          [Date.UTC(2022, 2, 30, 20), 0],[Date.UTC(2022, 2, 30, 21), 0],
          [Date.UTC(2022, 2, 30, 22), 0],[Date.UTC(2022, 2, 30, 23), 0],
           ]
        
    },

    {
      name: [("Média Dracena <br> 03/22")],
      showInLegend: true,
      
      data: [
        [Date.UTC(2022, 2, 30, 00),0],[Date.UTC(2022, 2, 30, 1), 0],
          [Date.UTC(2022, 2, 30, 2), 0],[Date.UTC(2022, 2, 30, 3), 0],
          [Date.UTC(2022, 2, 30, 4), 0],[Date.UTC(2022, 2, 30, 5), 0],
          [Date.UTC(2022, 2, 30, 6),0],[Date.UTC(2022, 2, 30, 7), 10.14],
          [Date.UTC(2022, 2, 30, 8), 33.15],[Date.UTC(2022, 2, 30, 9), 46.62],
          [Date.UTC(2022, 2, 30, 10), 53.36],[Date.UTC(2022, 2, 30, 11), 56.88],
          [Date.UTC(2022, 2, 30, 12), 57.00],[Date.UTC(2022, 2, 30, 13), 54.04],
          [Date.UTC(2022, 2, 30, 14), 42.18],[Date.UTC(2022, 2, 30, 15), 37.39],
          [Date.UTC(2022, 2, 30, 16), 30.58],[Date.UTC(2022, 2, 30, 17), 13.9],
          [Date.UTC(2022, 2, 30, 18), 1.08],[Date.UTC(2022, 2, 30, 19), 0],
          [Date.UTC(2022, 2, 30, 20), 0],[Date.UTC(2022, 2, 30, 21), 0],
          [Date.UTC(2022, 2, 30, 22), 0],[Date.UTC(2022, 2, 30, 23), 0],
           ]
           
    },
    
    {
      name: [("IDracena - 31/03")],
      data: [
        
        
           [Date.UTC(2022, 2, 31, 00), 0],[Date.UTC(2022, 2, 31, 01), 0],
           [Date.UTC(2022, 2, 31, 02), 0],[Date.UTC(2022, 2, 31, 03), 0],
           [Date.UTC(2022, 2, 31, 04), 0], [Date.UTC(2022, 2, 31, 05),0],
           [Date.UTC(2022, 2, 31, 06), 0.114],[Date.UTC(2022, 2, 31, 07), 7.55],
           [Date.UTC(2022, 2, 31, 08), 49.80],[Date.UTC(2022, 2, 31, 09), 51.9],
            [Date.UTC(2022, 2, 31, 10), 53.77],[Date.UTC(2022, 2, 31, 11), 50.73],
            [Date.UTC(2022, 2, 31, 12),44.01],[Date.UTC(2022, 2, 31, 13), 44.92],
            [Date.UTC(2022, 2, 31, 14), 24.80],[Date.UTC(2022, 2, 31, 15), 42.15],
            [Date.UTC(2022, 2, 31, 16), 48.79],[Date.UTC(2022, 2, 31, 17), 16.06],[
              Date.UTC(2022, 2, 31, 18), 0.48],[Date.UTC(2022, 2, 31, 19), 0],
              [Date.UTC(2022, 2, 31, 20), 0],[Date.UTC(2022, 2, 31, 21), 0],[
                Date.UTC(2022, 2, 31, 22), 0],[Date.UTC(2022, 2, 31, 23), 0],
        ]
    },


    {
      name: [("Média Dracena <br> 03/22")],
      showInLegend: true,
      
      data: [
        [Date.UTC(2022, 2, 31, 00),0],[Date.UTC(2022, 2, 31, 1), 0],
          [Date.UTC(2022, 2, 31, 2), 0],[Date.UTC(2022, 2, 31, 3), 0],
          [Date.UTC(2022, 2, 31, 4), 0],[Date.UTC(2022, 2, 31, 5), 0],
          [Date.UTC(2022, 2, 31, 6),0],[Date.UTC(2022, 2, 31, 7), 10.14],
          [Date.UTC(2022, 2, 31, 8), 33.15],[Date.UTC(2022, 2, 31, 9), 46.62],
          [Date.UTC(2022, 2, 31, 10), 53.36],[Date.UTC(2022, 2, 31, 11), 56.88],
          [Date.UTC(2022, 2, 31, 12), 57.00],[Date.UTC(2022, 2, 31, 13), 54.04],
          [Date.UTC(2022, 2, 31, 14), 42.18],[Date.UTC(2022, 2, 31, 15), 37.39],
          [Date.UTC(2022, 2, 31, 16), 31.58],[Date.UTC(2022, 2, 31, 17), 13.9],
          [Date.UTC(2022, 2, 31, 18), 1.08],[Date.UTC(2022, 2, 31, 19), 0],
          [Date.UTC(2022, 2, 31, 20), 0],[Date.UTC(2022, 2, 31, 21), 0],
          [Date.UTC(2022, 2, 31, 22), 0],[Date.UTC(2022, 2, 31, 23), 0],
           ]
           
    },

    
    {
      name: [("Getulina - 30/03")],
      data: [
        [Date.UTC(2022, 2, 30, 00), 0],[Date.UTC(2022, 2, 30, 1), 0],[
          Date.UTC(2022, 2, 30, 2), 0],[Date.UTC(2022, 2, 30, 3), 0],
          [Date.UTC(2022, 2, 30, 4), 0],[Date.UTC(2022, 2, 30, 5), 0],
          [Date.UTC(2022, 2, 30, 6), 1.267],[Date.UTC(2022, 2, 30, 7), 23.458],
          [Date.UTC(2022, 2, 30, 8), 61.60],[Date.UTC(2022, 2, 30, 9), 94.36],
          [Date.UTC(2022, 2, 30, 10), 116.16],[Date.UTC(2022, 2, 30, 11), 114.23],
          [Date.UTC(2022, 2, 30, 12), 80.58],[Date.UTC(2022, 2, 30, 13), 89.13],
          [Date.UTC(2022, 2, 30, 14), 78.53],[Date.UTC(2022, 2, 30, 15), 60.72],
          [Date.UTC(2022, 2, 30, 16), 44.94],[Date.UTC(2022, 2, 30, 17), 12.39],
          [Date.UTC(2022, 2, 30, 18), 0.59],[Date.UTC(2022, 2, 30, 19), 0],
          [Date.UTC(2022, 2, 30, 20), 0],[Date.UTC(2022, 2, 30, 21), 0],
          [Date.UTC(2022, 2, 30, 22), 0],[Date.UTC(2022, 2, 30, 23), 0],
           ]
        
    },


    {
      name: [("Média Getulina <br> 03/22")],
      data: [
        [Date.UTC(2022, 2, 30, 00),0],[Date.UTC(2022, 2, 30, 1), 0],
          [Date.UTC(2022, 2, 30, 2), 0],[Date.UTC(2022, 2, 30, 3), 0],
          [Date.UTC(2022, 2, 30, 4), 0],[Date.UTC(2022, 2, 30, 5), 0],
          [Date.UTC(2022, 2, 30, 6),1.14],[Date.UTC(2022, 2, 30, 7), 17.06],
          [Date.UTC(2022, 2, 30, 8), 45.81],[Date.UTC(2022, 2, 30, 9), 74.24],
          [Date.UTC(2022, 2, 30, 10), 91.72],[Date.UTC(2022, 2, 30, 11), 104.15],
          [Date.UTC(2022, 2, 30, 12), 103.91],[Date.UTC(2022, 2, 30, 13), 99.53],
          [Date.UTC(2022, 2, 30, 14), 87.38],[Date.UTC(2022, 2, 30, 15), 70.50],
          [Date.UTC(2022, 2, 30, 16), 42.798],[Date.UTC(2022, 2, 30, 17), 14.07],
          [Date.UTC(2022, 2, 30, 18), 1.019],[Date.UTC(2022, 2, 30, 19), 0],
          [Date.UTC(2022, 2, 30, 20), 0],[Date.UTC(2022, 2, 30, 21), 0],
          [Date.UTC(2022, 2, 30, 22), 0],[Date.UTC(2022, 2, 30, 23), 0],
           ]
           
    },
    {
      name: [("Getulina - 31/03")],
      data: [
        
        
           [Date.UTC(2022, 2, 31, 00), 0],[Date.UTC(2022, 2, 31, 01), 0],
           [Date.UTC(2022, 2, 31, 02), 0],[Date.UTC(2022, 2, 31, 03),0],
           [Date.UTC(2022, 2, 31, 04), 0],[Date.UTC(2022, 2, 31, 05), 0],
           [Date.UTC(2022, 2, 31, 06), 1.339],[Date.UTC(2022, 2, 31, 07), 26.61],
           [Date.UTC(2022, 2, 31, 08), 59.21],[Date.UTC(2022, 2, 31, 09), 79.9],
            [Date.UTC(2022, 2, 31, 10), 92.56],[Date.UTC(2022, 2, 31, 11),126.07],
            [Date.UTC(2022, 2, 31, 12),53.25],[Date.UTC(2022, 2, 31, 13), 9.25],
            [Date.UTC(2022, 2, 31, 14), 4.98],[Date.UTC(2022, 2, 31, 15), 2.41],
            [Date.UTC(2022, 2, 31, 16), 2.33],[Date.UTC(2022, 2, 31, 17), 0.08],[
              Date.UTC(2022, 2, 31, 18), 0],[Date.UTC(2022, 2, 31, 19), 0],
              [Date.UTC(2022, 2, 31, 20), 0],[Date.UTC(2022, 2, 31, 21), 0],[
                Date.UTC(2022, 2, 31, 22), 0],[Date.UTC(2022, 2, 31, 23), 0],
        ]
    },    

    
    {
      name: [("Média Getulina <br> 03/22")],
      data: [
        [Date.UTC(2022, 2, 31, 00),0],[Date.UTC(2022, 2, 31, 1), 0],
          [Date.UTC(2022, 2, 31, 2), 0],[Date.UTC(2022, 2, 31, 3), 0],
          [Date.UTC(2022, 2, 31, 4), 0],[Date.UTC(2022, 2, 31, 5), 0],
          [Date.UTC(2022, 2, 31, 6),1.14],[Date.UTC(2022, 2, 31, 7), 17.06],
          [Date.UTC(2022, 2, 31, 8), 45.81],[Date.UTC(2022, 2, 31, 9), 74.24],
          [Date.UTC(2022, 2, 31, 10), 91.72],[Date.UTC(2022, 2, 31, 11), 104.15],
          [Date.UTC(2022, 2, 31, 12), 103.91],[Date.UTC(2022, 2, 31, 13), 99.53],
          [Date.UTC(2022, 2, 31, 14), 87.38],[Date.UTC(2022, 2, 31, 15), 70.50],
          [Date.UTC(2022, 2, 31, 16), 42.798],[Date.UTC(2022, 2, 31, 17), 14.07],
          [Date.UTC(2022, 2, 31, 18), 1.019],[Date.UTC(2022, 2, 31, 19), 0],
          [Date.UTC(2022, 2, 31, 20), 0],[Date.UTC(2022, 2, 31, 21), 0],
          [Date.UTC(2022, 2, 31, 22), 0],[Date.UTC(2022, 2, 31, 23), 0],
           ]
           
    },


    
        
  ]


  
});

Highcharts.setOptions({
    lang: {
        months: ['Jan', 'Fév', 'Mar', 'Abr', 'Mai', 'Jun',  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    }
});
Highcharts.chart('container3', {
  chart: {
    type: 'pie',
    
  },
  title: {
    text: 'Geração de energia  Eólica por Usina(MWmed)'
  },
  subtitle: {
    text: 'Energia Eólica gerada a cada hora do dia - (30/03/22 & 31/03/22)'
  },
  xAxis: {
    alternateGrid: 'true',
    styledMode: 'true',
    type: 'datetime',
    alternateGridColor: '#FBFDFF',
    
   
    

    dateTimeLabelFormats: { // don't display the year
      month: '%e. %b',
      year: '%b',
      
    },
    title: {
      text: 'Data'
      
      
    }
  },
  yAxis: {
    
    title: {
      text: 'Geração(MWmed)',
      style: {
                color: 'grey'
            },  
    },
    
  },
  //tooltip: {
    //headerFormat: '<b>{series.name}</b><br>',
    //pointFormat: '{point.x:%e. %b}: {point.y:.2f} MWmed'  
  //},

  tooltip: {
    
        pointFormat: '{series.name}: <b>{point.y:.2f} MWmed</b><br/>',
        valueSuffix: ' MWmed',
        shared: true,
    },


  plotOptions: {
    series: {
      marker: {
        enabled: true,
        radius: 2.5,
         inside: true,
      }
    }
  },

  colors: ['#3772BA', '#FF6A4A', '#3772BA', '#FF6A4A', '#239B56','#FF6A4A', '#239B56', '#FF6A4A'],

  // Define the data points. All series have a year of 20222022/71 in order
  // to be compared on the same x axis. Note that in JavaScript, months start
  // at 0 for January, 1 for February etc.
  series: [
    {
      
      name: [("Icaraí - 30/03")],
      
      
      data: [
        [Date.UTC(2022, 2, '', 00), 0.547],[Date.UTC(2022, 2, '', 1), 3.64],[
          Date.UTC(2022, 2, '', 2), 14.71],[Date.UTC(2022, 2, '', 3), 18.477],
          [Date.UTC(2022, 2, '', 4), 13.477],[Date.UTC(2022, 2, '', 5), 9.87],
          [Date.UTC(2022, 2, '', 6), 32.69],[Date.UTC(2022, 2, '', 7), 100.2],
          [Date.UTC(2022, 2, '', 8), 40.10],[Date.UTC(2022, 2, '', 9), 59.16],
          [Date.UTC(2022, 2, '', 10), 25.9],[Date.UTC(2022, 2, '', 11), 9.949],
          [Date.UTC(2022, 2, '', 12), 14.44],[Date.UTC(2022, 2, '', 13), 12.98],
          [Date.UTC(2022, 2, '', 14), 0.6],[Date.UTC(2022, 2, '', 15), 7.14],
          [Date.UTC(2022, 2, '', 16), 22.79],[Date.UTC(2022, 2, '', 17), 45.66],
          [Date.UTC(2022, 2, '', 18), 43.81],[Date.UTC(2022, 2, '', 19), 42.12],
          [Date.UTC(2022, 2, '', 20), 18.38],[Date.UTC(2022, 2, '', 21), 20.57],
          [Date.UTC(2022, 2, '', 22), 15.96],[Date.UTC(2022, 2, '', 23), 22.5],
           ]
        
    },

    {
      name: [("Média Icaraí <br> 03/22")],
      showInLegend: true,
      
      data: [
        [Date.UTC(2022, 2, '', 00),15.236],[Date.UTC(2022, 2, '', 1), 10.756],
          [Date.UTC(2022, 2, '', 2), 9.637],[Date.UTC(2022, 2, '', 3), 8.585],
          [Date.UTC(2022, 2, '', 4), 8.8],[Date.UTC(2022, 2, '', 5), 9.456],
          [Date.UTC(2022, 2, '', 6),11.889],[Date.UTC(2022, 2, '', 7), 9.743],
          [Date.UTC(2022, 2, '', 8), 8.401],[Date.UTC(2022, 2, '', 9), 16.278],
          [Date.UTC(2022, 2, '', 10), 22.7117],[Date.UTC(2022, 2, '', 11), 31.850],
          [Date.UTC(2022, 2, '', 12), 34.856],[Date.UTC(2022, 2, '', 13), 37.771],
          [Date.UTC(2022, 2, '', 14), 37.033],[Date.UTC(2022, 2, '', 15), 31.910],
          [Date.UTC(2022, 2, '', 16), 28.5],[Date.UTC(2022, 2, '', 17), 23.81],
          [Date.UTC(2022, 2, '', 18), 21.5],[Date.UTC(2022, 2, '', 19), 20.75],
          [Date.UTC(2022, 2, '', 20), 18.5],[Date.UTC(2022, 2, '', 21), 16.056],
          [Date.UTC(2022, 2, '', 22), 17.768],[Date.UTC(2022, 2, '', 23), 16.011],
           ]
           
    },
    
    {
      name: [("Icaraí - 31/03")],
      data: [
        
        
           [Date.UTC(2022, 2, '', 00), 44.521],[Date.UTC(2022, 2, '', 01), 38.91],
           [Date.UTC(2022, 2, '', 02), 43.17],[Date.UTC(2022, 2, '', 03), 39.72],
           [Date.UTC(2022, 2, '', 04), 18.94], [Date.UTC(2022, 2, '', 05),16.00],
           [Date.UTC(2022, 2, '', 06), 30.44],[Date.UTC(2022, 2, '', 07), 10.11],
           [Date.UTC(2022, 2, '', 08), 3.93],[Date.UTC(2022, 2, '', 09), 11.37],
            [Date.UTC(2022, 2, '', 10), 9.934],[Date.UTC(2022, 2, '', 11), 52.35],
            [Date.UTC(2022, 2, '', 12),0.56],[Date.UTC(2022, 2, '', 13), 0.13],
            [Date.UTC(2022, 2, '', 14), 0.74],[Date.UTC(2022, 2, '', 15), 0.68],
            [Date.UTC(2022, 2, '', 16), 0.68],[Date.UTC(2022, 2, '', 17), 0.68],[
              Date.UTC(2022, 2, '', 18), 0.68],[Date.UTC(2022, 2, '', 19), 0.68],
              [Date.UTC(2022, 2, '', 20), 0.68],[Date.UTC(2022, 2, '', 21), 0.68],[
                Date.UTC(2022, 2, '', 22), 0.68],[Date.UTC(2022, 2, '', 23), 0.68],
        ]
    },      
  ]


  
});




console.log(
       'Current time in Brasília',
       chart.time.dateFormat('%Y-%m-%d %H:%M:%S', Date.now())
);