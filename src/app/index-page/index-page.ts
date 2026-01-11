import { Component, inject, } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ProductService } from '../product-service/product-service';
import { ProductCard } from '../product-card/product-card';
@Component({
  selector: 'app-index-page',
  imports: [ProductCard],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css',
})
export class IndexPage {
  private ProductService = inject(ProductService);
  products = this.ProductService.getProductList();

}
