import {Component, Input, ElementRef, OnInit} from '@angular/core';
import {TitleCasePipe} from "../pipes/titlecase.pipe";

declare var jQuery:any;
declare var Highcharts:any;

@Component({
  selector: 'bar-chart',
  template: `<div id="{{selector}}" style="min-width: 310px; height: 400px; margin: 0 auto">`,
  pipes: [TitleCasePipe]
})
export class BarChartComponent implements OnInit {

  @Input() selector: string;
  @Input() heading: string;

  ngOnInit(){


  }

  constructor() {

  }


  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {

    /*if (!Highcharts.theme) {
      Highcharts.setOptions({
        chart: {
          backgroundColor: 'black'
        },
        colors: ['#F62366', '#9DFF02', '#0CCDD6'],
        title: {
          style: {
            color: 'silver'
          }
        },
        tooltip: {
          style: {
            color: 'silver'
          }
        }
      });
    }*/

    Highcharts.chart(this.selector, {

      chart: {
        type: 'column'
      },
      title: {
        text: 'Your Results'
      },
      subtitle: {
        text: 'Subtitle Can Go Here'
      },
      xAxis: {
        categories: [
          'Spiritual ',
          'Habits',
          'Relationships',
          'Emotional Well-being',
          'Eating Habits',
          'Relaxation',
          'Exercise',
          'Medical Maintenance',
          'Financial',
          'Play',
          'Work-life Balance',
          'Home Environment',
          'Intellectual Well-being',
          'Self-image',
          'Work Satisfaction'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        max: 100,
        title: {
          text: 'Measurement'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.05,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Balanced',
        data: [30, 70, 50, 10, 40, 100, 60, 20, 80, 70, 10, 50, 30, 40, 100]

      },
        {
          name: 'Importance',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 20, 40, 30, 20, 20]

        },
        {
          name: 'Motivated',
          data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 30, 20, 30, 10, 10]

        },
        {
          name: 'Happiness',
          data: [10, 30, 50, 70, 90, 20, 40, 60, 80, 100, 40, 20, 30, 50, 30]

        },
        {
          name: 'Performance',
          data: [30, 70, 50, 10, 40, 100, 60, 20, 80, 70, 50, 20, 50, 40, 10]

        }]
    });
  }
}
