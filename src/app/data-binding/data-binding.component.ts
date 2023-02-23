import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  age=20
  public phone:number = 9182220523;
public name: string = "abd"
public isIndian:boolean=true;

public mobile:number = 99;


submit(){
  alert("submit clicked");
}

test(){
  alert("double clicked");
}

enter(){
  alert("mouse ented");
}

leave(){
  alert("mouse leaved");
}
key(){
  alert("key pressed");
}
}
