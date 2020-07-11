import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ChartComponent } from './chart/chart.component';
import { MaleFemaleComponent } from './male-female/male-female.component';
import { AgeComponent } from './age/age.component';
import { BarComponent } from './bar/bar.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "home",
    canActivate:[AuthGuard],
    component: HomeComponent,
  },
  {
    path: "chart",
    component: ChartComponent,
  },
  {
    path: "male-female",
    component: MaleFemaleComponent,
  },
  {
    path: "age",
    component: AgeComponent,
  },
  {
    path: "bar",
    component: BarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
