import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public term:string="";
  public column:string ="";
  public order:string="";
 
  public users:any =[];

  constructor(private _usersService:UsersService) { 
  
    _usersService.getUsers().subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
      )
      
    
  
    
  }

  filter(){
    this._usersService.getFilteredUsers(this.term).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("internal server errror");
      }
    )
   
  }
  sort(){
    this._usersService.getSortedUsers(this.column,this.order).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
   page(no:number){
    this._usersService.getPagedUsers(no,10).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
   }

   delete(id:string){
    this._usersService.deleteUser(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully");
       location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      } 
    )
   }

}
