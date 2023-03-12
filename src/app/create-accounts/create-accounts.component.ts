import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent {
  public accountForm:FormGroup = new FormGroup(
    {
     accountname: new FormControl(),
     availablebalance: new FormControl(),
     accountnumber: new FormControl(),
     id: new FormControl(),
     sno: new FormControl(),
    EmployeeId : new FormControl(),
     EmployeeName: new FormControl(),
     BillacilityStatus: new FormControl(),
    Location : new FormControl(),
     Band: new FormControl(),
     Yrsofexp: new FormControl(),
     RollOverdate: new FormControl(),
     RollOverQuarter: new FormControl(),
     PRP: new FormControl(),
     Codility: new FormControl(),
     ReadyforDeploymentskill: new FormControl(),
     Profile: new FormControl(),
     ReasonforRejection: new FormControl(),
     
    }

  );

  constructor(private _accountsService:AccountsService){}
  submit(){
    console.log(this.accountForm);
   this._accountsService.createAccount(this.accountForm.value).subscribe(
    (data:any)=>{
      alert("account created successfully");
    },
    (err:any)=>{
      alert("internal server error")
    }
   )
   

    
  }

}
