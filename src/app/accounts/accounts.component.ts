import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  public accounts:any=[];
  constructor(private _AccountsService:AccountsService){
     _AccountsService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
     )
  }

}
