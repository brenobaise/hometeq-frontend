import { Component, inject } from '@angular/core';
import { ProductService } from '../product-service/product-service';
import { Product } from '../types/Product';
import { ActivatedRoute } from '@angular/router';
import { PrimaryButton } from '../shared/primary-button/primary-button';
@Component({
  selector: 'app-product-page',
  imports: [PrimaryButton],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  productService: ProductService = inject(ProductService);
  product: Product | undefined;
  router = inject(ActivatedRoute);

  constructor() {
    const productId = Number(this.router.snapshot.params['id']);
    this.product = this.productService.getProductById(productId);
  }
}
