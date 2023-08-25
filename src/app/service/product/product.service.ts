import { Injectable } from '@angular/core';
import {Category} from "../../model/category.model";
import {Product, ProductHttp} from "../../model/product.model";
import {firstValueFrom, map} from "rxjs";
import {Environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseApiUrl:string
  constructor(private http: HttpClient) {
    this.baseApiUrl = Environment.API_URL
  }
  getAll(): Promise<Product[]> {
    return firstValueFrom(
      this.http
        .get<{ products: ProductHttp[] }>(this.baseApiUrl + 'products')
        .pipe(
          map(response => {
            const productHttpArray = response.products;
            console.log('ProductHttp Array:', productHttpArray);
            return productHttpArray.map(productHttp => Product.fromProductHttpToProduct(productHttp));
          })
        )
    )
  }

  getAllByCategory(category: Category): Promise<Product[]> {
    return firstValueFrom(
      this.http
        .get<{ products: ProductHttp[] }>(this.baseApiUrl + 'products/category/' + category)
        .pipe(
          map(response => {
            const productHttpArray = response.products;
            console.log('ProductHttp Array by Category:', productHttpArray);
            return productHttpArray.map(productHttp => Product.fromProductHttpToProduct(productHttp));
          })
        )
    )
  }


  getById(productId: number): Promise<Product> {
    return firstValueFrom(
      this.http
        .get<ProductHttp>(this.baseApiUrl + 'products/' + productId)
        .pipe(
          map(productHttp => Product.fromProductHttpToProduct(productHttp))
        )
    )
  }
}
