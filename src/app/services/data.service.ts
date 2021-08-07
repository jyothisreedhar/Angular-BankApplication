import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser = ""
  currentAcc = ""
  account_details: any = {
    1000: { name: "Ajay", accno: 1000, password: "testone", amount: 5000 },
    1001: { name: "Vijay", accno: 1001, password: "testtwo", amount: 3000 },
    1002: { name: "Ram", accno: 1002, password: "testthree", amount: 7000 },
    1003: { name: "Ravi", accno: 1003, password: "testfour", amount: 10000 },
  }

  constructor(private http:HttpClient) {
    this.getDetails();
  }
  saveDetails() {
    localStorage.setItem("account_details", JSON.stringify(this.account_details))
    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))

    }
    if (this.currentUser) {
      localStorage.setItem("currentAcc", JSON.stringify(this.currentAcc))

    }
  }
  getDetails() {
    if (localStorage.getItem("account_details")) {
      this.account_details = JSON.parse(localStorage.getItem("account_details") || '')
    }
    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')

    }
    if (localStorage.getItem("currentAcc")) {
      this.currentAcc = JSON.parse(localStorage.getItem("currentAcc") || '')
    }
  }
  deleteAccDetails(acno: any) {
    if (this.currentAcc == acno) {
      localStorage.removeItem("currentAcc")
      this.saveDetails();
      return true;
    }
    else {
      return false
    }
  }

  register(name: any, accno: any, password: any) {
    //pass comment to server end
    // register(uname: any, accno: any, pswd: any) {
    // const data={
    //   uname,
    //   accno,
    //   pswd
      
    // }
    //return http verb/method("server path","user data")
    
    // this.http.post("http://localhost:3000/register",data)

    let dataset = this.account_details;
    if (accno in dataset) {
      // alert("Account Alredy Exist,Please Login");
      return false;
    }
    else {
      this.account_details[accno] = {
        name,
        accno,
        password,
        amount: 0
      }
      this.saveDetails();
      return true;
      // alert("successfully Registered...");
    }
  }
  login(accno: any, pswd: any) {
    let dataset = this.account_details;
    if (accno in dataset) {
      if (pswd == dataset[accno]["password"]) {
        this.currentUser = dataset[accno]["name"]
        this.currentAcc = accno
        this.saveDetails();
        return true;
      }
      else {
        alert("incorrct password");
        return false;
      }

    }
    else {
      alert("invalid account");
      return false
    }
  }
  deposit(accno: any, pswd: any, amnt: any) {
    var amount = parseInt(amnt)
    let dataset = this.account_details;
    if (accno in dataset) {
      if (pswd == dataset[accno]["password"]) {
        dataset[accno]["amount"] += amount;
        return dataset[accno]["amount"];
      }
      else {
        alert("incorrct password");
        return false;
      }
    }
    else {
      alert("Invalid account");
      return false;
    }

  }
  withdraw(accno: any, pswd: any, amnt: any) {
    var amount = parseInt(amnt)
    let dataset = this.account_details;
    if (accno in dataset) {
      if (pswd == dataset[accno]["password"]) {

        if (amount < dataset[accno]["amount"]) {

          dataset[accno]["amount"] -= amount;

          return dataset[accno]["amount"];
        }
        else {
          alert("insufficient balance");
          return false;
        }
      }
      else {
        alert("Incorrect password");
        return false
      }

    }
    else {
      alert("Invalid account");
      return false;

    }
  }
}

