import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public createStudent:FormGroup= new  FormGroup(
    {
      name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      age: new FormControl("",[Validators.required,Validators.min(0),Validators.max(100)]),
      email: new FormControl("",[Validators.required,Validators.email]),
      address: new FormGroup(
        {
          state: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
          pin: new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)])
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
          number: new FormControl("",[Validators.required,Validators.min(100000000000),Validators.max(999999999999)]),
          expiry: new FormControl(),
          cvv: new FormControl("",[Validators.required,Validators.min(100),Validators.max(999)])
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
