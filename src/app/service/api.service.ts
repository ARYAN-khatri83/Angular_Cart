import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators' // this is to be imported when using the api to fetch the data
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get<any>(" https://fakestoreapi.com/products/")
    .pipe(map((res:any)=>{ // commands to fetch the data from the api
      return res;
    }))
  }
}
