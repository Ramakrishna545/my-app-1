import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  public URL:string="https://6128991386a213001729f9df.mockapi.io/test/v1/principals";

  constructor(private _httpClient:HttpClient) { }
  getAccounts():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }
  createAccount(data:any):Observable<any>{
    return this._httpClient.post(this.URL,data);
  }
  
}
