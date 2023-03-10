import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  public URL:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";

  constructor(private _httpClient:HttpClient) { }
  getvehicles():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }

createvehicle(data:any):Observable<any>{
  return this._httpClient.post(this.URL,data);
}
}
