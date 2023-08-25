import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product.model";
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit{
  products$!:Promise<Product[]>
  constructor(private productsService:ProductService, private route:ActivatedRoute,) {

  }
  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('name')
    if(category) {
      this.products$ = this.productsService.getAllByCategory(category)

    }
    else{
      this.products$ = this.productsService.getAll()

    }
  }

}
