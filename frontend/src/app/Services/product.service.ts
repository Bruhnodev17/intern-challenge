import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface ProductResponse {

  id: number;
  name: string;
  price: number;
  validity: Date | string | number;
  perishable: boolean | string;
  stock: number | string;
  created_at: string;
  updated_at: string;

}

export interface ProductResponseType{
  status: Number,
  products: ProductResponse[];
}

export interface ProductEditResponse{
  status: Number;
  product: ProductResponse;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httplient: HttpClient) { }

  getProducts(){
    return this.httplient.get(`http://127.0.0.1:8000/api/index`,);

  }

  getProduct(productId: number){
    return this.httplient.get<ProductEditResponse>(`http://127.0.0.1:8000/api/edit/${productId}`)
  }


  saveProduct(inputData: object) {
    return this.httplient.post(`http://127.0.0.1:8000/api/store`, inputData);
  }

  updateProduct(inputData: object, productId:number){
    return this.httplient.put(`http://127.0.0.1:8000/api/update/${productId}`, inputData)
  }

  destroyProduct(productId:Number){
    return this.httplient.delete(`http://127.0.0.1:8000/api/delete/${productId}`)
  }

}
