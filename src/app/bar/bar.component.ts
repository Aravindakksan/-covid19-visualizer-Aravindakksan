import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartService} from '../chart.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, SingleDataSet } from 'ng2-charts';
import {  RadialChartOptions } from 'chart.js';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  
  //total cases
  confirmed = 0;
  recovered = 0;
  deaths = 0;
  active = 0;

  // statewise cases
  items = [];
  confirmedItem = [];
  recoveredItem = [];
  deathItem = [];
  stateLabel = [];
  dataItem = [];
  activeItem = [];
  constructor(private bar: ChartService) {
    this.bar.getService().subscribe(
      data => {
        this.items = data;
        console.log(this.items[0].confirmed);
        for (let i = 0; i < data.length; i++) {
          this.stateLabel.push(this.items[i].provinceState);
          this.confirmedItem.push(this.items[i].confirmed);
          this.recoveredItem.push(this.items[i].recovered);
          this.deathItem.push(this.items[i].deaths);
          this.activeItem.push(this.items[i].active);
          this.confirmed = this.confirmed + this.items[i].confirmed;
          this.recovered = this.recovered + this.items[i].recovered;
          this.deaths = this.deaths + this.items[i].deaths;
          this.active = this.active + this.items[i].active;
        }
        this.dataItem.push(this.confirmed);
        this.dataItem.push(this.recovered);
        this.dataItem.push(this.deaths);
        this.dataItem.push(this.active)
        console.log(this.confirmed);
        console.log(this.recovered);
        console.log(this.deaths);
        console.log(this.items)
      },
      err => console.log("error", err),
      () => console.log("finally")
    )
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.stateLabel;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.confirmedItem, label: 'Confirmed' },
    { data: this.recoveredItem, label: 'Recovered' },
    { data: this.activeItem, label: 'Active' },
    { data: this.deathItem, label: 'Deaths' }
  ];

  public barChartColors: Color[] = [
    { backgroundColor: 'blue' },
    { backgroundColor: 'yellow' },
    { backgroundColor: 'green' },
    { backgroundColor: 'red' },
  ]

 

  ngOnInit(): void {
  }

}
