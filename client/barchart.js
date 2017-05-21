import Highcharts from 'highcharts';
import { Template } from 'meteor/templating';

Meteor.subscribe('RecordsList');

function createBar() {

   var data2016 = RecordsList.find({active_date: {
        $gte: new Date("2016-01-01T00:00:00.000Z"),
        $lt: new Date("2017-01-01T00:00:00.000Z")
    }}).count(),
   data2015 = RecordsList.find({active_date: {
        $gte: new Date("2015-01-01T00:00:00.000Z"),
        $lt: new Date("2016-01-01T00:00:00.000Z")
    }}).count(),
   chartData = [{
                y: data2015,
                name: "2015"
             }, {
                 y: data2016,
                 name: "2016"
             }];
  Meteor.defer(function() {
  $('#container-bar').highcharts({
  chart: {
	    type:'column',
        backgroundColor: 'Grey',
        plotBorderWidth: 0,
        plotShadow: false
    },
     title: {
        text: 'Bar Chart By Year',
        style: {
	     color:'#FCFFC5',
         }
       
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
	xAxis: {
        categories: ['2015', '2016'],
        title: {
            text: 'Year',
			style: {
	         color:'#FFFFFF',
         }
        },
		labels: {
         style: {
            color: '#FFFAF0',
         }
      },
        lineColor:"#FFFAF0" 
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Records',
            align: 'high',
			style: {
	         color:'#FFFFFF',
         }
        },
        lineColor:"#FFFAF0",
		lineWidth: 1,	
        labels: {
            overflow: 'justify',
			style: {
            color: '#FFFAF0',
         }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -10,
        y: 50,
        floating: true,
        itemStyle:{
		  color:'#FFFAF0',
		},
        borderWidth: 1,
        shadow: true
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
			}
		}
    },
    series: [{
		name: "Number of Records",
        data: chartData
    }			
	]
  });
  });
}

Template.Bar.onCreated(function() {
});

Template.Bar.onRendered(function() {
  this.autorun(() => {
    createBar();
  });
});