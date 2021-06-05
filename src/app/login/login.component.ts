import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  loginForm=this.log.group({
    
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
  })
  
  constructor(private router:Router, private dataService:DataService,private log:FormBuilder) { }

  ngOnInit(): void {
  }
  
  login() {
    // console.log(a.value,p.value);

    var accno = this.loginForm.value.acno;
    var pswd = this.loginForm.value.pswd;
    if(this.loginForm.valid){
      const result=this.dataService.login(accno,pswd)
      if (result){
        alert("Successfully Loged In");
        this.router.navigateByUrl("dashboard")
      }
    }
  
    else{
      alert("Invalid Form")
    } 

  }
  register() {
    this.router.navigateByUrl("register");
  }
}




