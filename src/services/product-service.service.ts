import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


let url = "https://fakestoreapi.com/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(url);
  }

}
