import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public createStudent:FormGroup= new  FormGroup(
    {
      name: new FormControl(),
      age: new FormControl(),
      email: new FormControl(),
      address: new FormGroup(
        {
          state: new FormControl(),
          pin: new FormControl()
        }
      ),
      type: new FormControl(),
      busFee: new FormControl(),
      hostelFee: new FormControl(),
      cards: new FormArray([])
    }
  );
  
  get CardsFormArray(){
    return this.createStudent.get('cards') as FormArray;
  }

  add(){
    this.CardsFormArray.push(
      new FormGroup(
        {
          number: new FormControl(),
          expiry: new FormControl(),
          cvv: new FormControl()
        }
      )

    )
  }

  delete(i:number){
    this.CardsFormArray.removeAt(i);
  }
  
  submit(){
    console.log(this.createStudent);
  }

}
