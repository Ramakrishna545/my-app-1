import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public ages:number[]=[10,20,30,40];
  public names:string[]=["ram","raj","kiran","laxman"]
  public states:string[]=["Telangana","ap","mp","goa"]
  public users:any = [
    {name:'abc',phone:6526662526,marks:23,age:12},
    {name:'def',phone:2666256526,marks:55,age:23},
    {name:'def',phone:6526252656,marks:80,age:44}
  ]
  public products:any = [
    {name:'pen',price:'10',rating:2},
    {name:'shirt',price:'1500',rating:3},
    {name:'mobile',price:'12000',rating:4},
    {name:'tv',price:'25000',rating:5}
  
  ]

}
