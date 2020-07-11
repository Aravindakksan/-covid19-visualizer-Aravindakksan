import { Component, OnInit,ViewChild} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, MultiDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend, SingleDataSet } from 'ng2-charts';
import { ChartService } from '../chart.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {

age20:number=0;
age30:number=0;
age40:number=0;
age50:number=0;
patient:any=[];
dataItem:any=[];
  constructor(private chart: ChartService) {
    this.chart.maleFeamleData().subscribe(
      data => {
        this.patient=data.raw_data;
        console.log(this.patient[0].agebracket);
        for(let i=0;i<this.patient.length;i++){
          if(this.patient[i].agebracket=="20"){
            this.age20++;
          }
          else if(this.patient[i].agebracket=="30"){
            this.age30++;
          }
          else if(this.patient[i].agebracket=="40"){
            this.age40++;
          }
          else
          this.age50++;
        }
        
        this.dataItem.push(this.age20);
        this.dataItem.push(this.age30);
        this.dataItem.push(this.age40);
        this.dataItem.push(this.age50);
        console.log(this.age20);
        console.log(this.dataItem);
      },
      err => console.log("error", err),
      () => console.log("finally")
    );
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }
  
  public lineChartLabels: Label[] = ['Age 20', 'Age 30', 'Age 40', 'Age 50']; 
  public lineChartData:ChartDataSets[] = [
    { data: this.dataItem, label: 'Age' },
  ]; 
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(233,34,33,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


  ngOnInit(): void {
  }

}
