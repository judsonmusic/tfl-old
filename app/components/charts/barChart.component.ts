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
          'Category',
          'Category',
          'Category',
          'Category',
          'Category',
          'Category',
          'Category',
          'Category',
          'Category',
          'Category'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Measurement'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Results',
        data: [30, 70, 50, 10, 40, 100, 60, 20, 80, 70]

      }]
    });
  }
}
