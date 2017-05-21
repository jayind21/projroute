import Highcharts from 'highcharts';
import { Template } from 'meteor/templating';

Meteor.subscribe('RecordsList');

function createPie() {

  var allData = RecordsList.find().count(),
   activedata = RecordsList.find({active: 'y'}).count(),
   chartData = [{
                y: activedata,
                name: "Active"
             }, {
                 y: allData - activedata,
                 name: "Inactive"
             }];
  Meteor.defer(function() {
  $('#container-pie').highcharts({
  chart: {
        backgroundColor: 'Grey',
        plotBorderWidth: 0,
        plotShadow: false
    },
     title: {
        text: 'Pie Chart By Status',
        style: {
	     color:'#FCFFC5',
        }
       
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.0f}%</b>'
    },
    plotOptions: {
        pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			states: {
                select: {
                    color: null,
                    borderWidth:5,
                    borderColor:'Grey'
				}
			},
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b> {point.y}, {point.percentage:.0f} %',
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
          
        }
    },
    series: [{
        type: 'pie',
        data: chartData
    }]
  });
  });
}

Template.Pie.onCreated(function() {
});

Template.Pie.onRendered(function() {
  this.autorun(() => {
    createPie();
  });
});