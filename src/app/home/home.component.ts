import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartService } from '../chart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  confirmed = 0;
  recovered = 0;
  deaths = 0;
  active = 0;
  data = [];
  confirmedItem = [];
  recoveredItem = [];
  deathItem = [];
  stateLabel = [];
  dataItem = [];
  activeItem = [];


  constructor(private chart: ChartService,private router:Router) { 
    this.chart.getService().subscribe(
      data => {
        this.data = data;
        for (let i = 0; i < data.length; i++) {
          this.stateLabel.push(this.data[i].provinceState);
          this.confirmedItem.push(this.data[i].confirmed);
          this.recoveredItem.push(this.data[i].recovered);
          this.deathItem.push(this.data[i].deaths);
          this.activeItem.push(this.data[i].active);
          this.confirmed = this.confirmed + this.data[i].confirmed;
          this.recovered = this.recovered + this.data[i].recovered;
          this.deaths = this.deaths + this.data[i].deaths;
          this.active = this.active + this.data[i].active;
        }
        this.dataItem.push(this.confirmed);
        this.dataItem.push(this.recovered);
        this.dataItem.push(this.deaths);
        this.dataItem.push(this.active)
      },
      err => console.log("error", err),
      () => console.log("complete")
    )
  }

  

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(["/login"]);
  }
}
