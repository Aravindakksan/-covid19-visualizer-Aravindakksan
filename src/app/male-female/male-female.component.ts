import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';
import { ChartType, ChartOptions } from 'chart.js';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-male-female',
  templateUrl: './male-female.component.html',
  styleUrls: ['./male-female.component.css']
})
export class MaleFemaleComponent implements OnInit {
male:number=0;
female:number=0;
patient:any=[];
dataItem:any=[];
  constructor(private chart: ChartService) {
    this.chart.maleFeamleData().subscribe(
      data => {
        this.patient=data.raw_data;
        for(let i=0;i<this.patient.length;i++){
          if(this.patient[i].gender=="F"){
            this.female++;
          }
          else
            this.male++;
        }
        this.dataItem.push(this.male);
        this.dataItem.push(this.female);
      },
      err => console.log("error", err),
      () => console.log("finally")
    );
    
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }
   
   public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartColors: Array < any > = [{
    backgroundColor: ['blue', 'green', 'rgba(233,159,44,0.5)'],
    borderColor: ['rgba(135,206,250,1)', 'rgba(106,90,205,0.5)', 'rgba(148,159,177,1)']
 }];
  
  public pieChartLabels: Label[] = ['male','female'];
  public pieChartData: MultiDataSet = this.dataItem;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = []; 
  ngOnInit(): void {
  }

}
