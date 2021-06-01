import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your Perfect Banking Partner";

  // account = "Account Number";
  acno = "Account Number";
  pswd = "";

  // account_details: any = {
  //   1000: { name: "ajay", accno: 1000, password: "testone", amount: 5000 },
  //   1001: { name: "vijay", accno: 1001, password: "testtwo", amount: 3000 },
  //   1002: { name: "ram", accno: 1002, password: "testthree", amount: 7000 },
  //   1003: { name: "ravi", accno: 1003, password: "testfour", amount: 10000 },
  // }

  constructor(private router:Router, private dataService:DataService) { }

  ngOnInit(): void {
  }
  // accChange(event: any) {
  //   this.acno = event.target.value
  //   console.log(this.acno);

  // }
  // pswdChange(event: any) {
  //   this.pswd = event.target.value
  //   console.log(this.pswd);
  // }
  login() {
    // console.log(a.value,p.value);

    var accno = this.acno;
    var pswd = this.pswd;
    let dataset = this.dataService.account_details
    if (accno in dataset) {
      if (pswd == dataset[accno]["password"]) {
        alert("Login Success");
        this.router.navigateByUrl("dashboard")
      }
      else {
        alert("Incorrect Password");
      }
    }
    else {
      alert("Invalid Account Number");
    }


  }
  register() {
    this.router.navigateByUrl("register");
  }
}
