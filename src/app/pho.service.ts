import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoService {

  constructor(private http:HttpClient) { }
  fetchphoto=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }
}
