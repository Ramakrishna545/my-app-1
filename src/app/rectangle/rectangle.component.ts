import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  public number1:number = 0;
  public number2:number =0;
  public result: number= 0;

  area(){
    this.result=this.number1*this.number2
  }
  perimeter(){
    this.result= 2 * (this.number1 + this.number2)
  }
  

}
