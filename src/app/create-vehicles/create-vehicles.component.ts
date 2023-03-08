import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css']
})
export class CreateVehiclesComponent {

  public vehiclesForm:FormGroup= new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      color: new FormControl(),
      image: new FormControl(),
      id: new FormControl(),
    }
  );
  constructor(private _VehicleService:VehicleService) { }

  submit() {
    console.log(this.vehiclesForm);

  this._VehicleService.createvehicle(this.vehiclesForm.value).subscribe(
    (data:any)=>{
      alert("vehicle created succesfully");
    },
    (err:any)=>{
     alert("internal server error");
    }
    )
  
  }

}
