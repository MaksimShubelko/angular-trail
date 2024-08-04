import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IProduct} from '../models/product';
import {HttpClient} from "@angular/common/http";
import {delay, retry, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[] = []

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:8000/products').pipe(
      delay(100),
      retry(2),
      tap(products => this.products = products))
  }


  constructor(private http: HttpClient) {
  }
}
