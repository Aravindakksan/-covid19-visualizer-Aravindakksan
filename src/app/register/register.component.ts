import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from '../user.model';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User;
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.reset();
  }

  reset(form?:NgForm){
    if(form !=null)
    form.reset();
    this.user={
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
  }

  OnSubmit(form: NgForm) {
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        console.log(form.value);
        // if (data.Succeeded == true) {
        //   this.reset(form);
        //   this.toastr.success("User registration successful");
        // }
        var message="Registration success";
        this.toastr.success(message);
        this.reset(form);
      });
  }

}



















