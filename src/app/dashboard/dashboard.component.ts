import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // acno="";
  // pswd="";
  // amount="";
  acno="";
  lDate : Date= new Date();
  depositForm = this.db.group({

    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  })

  // wacno = "";
  // wpswd = "";
  // wamount = "";
  withdrawForm = this.db.group({

    wacno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    wpswd: ['', [Validators.required, Validators.pattern('[a-zA-z0-9]*')]],
    wamount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  })

  user=this.dataService.currentUser;
  constructor(private dataService: DataService, private db: FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
  deposit() {
    var acno = this.depositForm.value.acno;
    var pswd = this.depositForm.value.pswd;
    var amount = this.depositForm.value.amount;

    if (this.depositForm.valid) {
      const result = this.dataService.deposit(acno, pswd, amount);
      if (result) {
        alert("amount" + amount + "Credited Successfully and new balance is :" + result);
      }

    }
    else {
      alert("Invalid Form")
    }
  }
  withdraw() {
    var wacno = this.withdrawForm.value.wacno;
    var wpswd = this.withdrawForm.value.wpswd;
    var wamount = this.withdrawForm.value.wamount;
    if (this.withdrawForm.valid) {
      const result = this.dataService.withdraw(wacno, wpswd, wamount)
      if (result) {
        alert("amount" + wamount + "Debited Successfully and remaining balance is :" + result);
      }


    }
    else {
      alert("Invalid Form")
    }

  }
  deleteAcc(){
    this.acno=this.dataService.currentAcc
    
  }
  onCancel(){
    this.acno=""
  }
  onDelete(event:any){
    const result=this.dataService.deleteAccDetails(event)
    if(result){
      alert("Account Deleted Successfully");
      this.router.navigateByUrl("")
    }
    else{
      alert("Operation denied")
    }
    
  }
  

}
