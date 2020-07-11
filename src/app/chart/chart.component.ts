import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartService } from '../chart.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, SingleDataSet } from 'ng2-charts';
import {  RadialChartOptions } from 'chart.js';


import { Observable } from "rxjs";
import { timestamp } from 'rxjs/operators';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  confirmed = 0;
  recovered = 0;
  deaths = 0;
  active = 0;
  items = [];
  confirmedItem = [];
  recoveredItem = [];
  deathItem = [];
  stateLabel = [];
  dataItem = [];
  activeItem = [];
  statedata=[];

  constructor(private chart: ChartService) { 

  this.chart.getService().subscribe(
      data => {
        this.items = data;
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
          var obj={
            "state":this.stateLabel[i],
            "confirmed":this.confirmedItem[i],
            "active":this.activeItem[i],
            "recover":this.recoveredItem[i],
            "death":this.recoveredItem[i]
          }
          this.statedata.push(obj);
        }
        this.dataItem.push(this.confirmed);
        this.dataItem.push(this.recovered);
        this.dataItem.push(this.deaths);
        this.dataItem.push(this.active)
        //console.log(this.statedata);
      },
      err => console.log("error", err),
      () => console.log("finally")
    )
  }

  ngOnInit(): void {
  }

}
