import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname = "";
  acno = "";
  pswd = "";
  registerForm = this.reg.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-z0-9]*')]]
  })

  constructor(private dataService: DataService, private router: Router, private reg: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {


    var uname = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var pswd = this.registerForm.value.pswd;
    // console.log(uname, acno, pswd);


    if (this.registerForm.valid) {
      const result = this.dataService.register(uname, acno, pswd)
      if (result) {

        alert("Successfully Registered");

        this.router.navigateByUrl("");
      }
      else {
        alert("Account Alredy Exist,Please Login")
      }

    }
    else {
      alert("Invalid form")
    }
  }
}



