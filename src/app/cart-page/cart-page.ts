import { Component, inject } from '@angular/core';
import { ProductService } from '../product-service/product-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  imports: [RouterLink],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {
  private ProductService = inject(ProductService);
  products = this.ProductService.getProductList();

  expandedId: number | null = null;

  expanded = new Set<number>();

  toggleRow(id: number) {
    this.expanded.has(id) ? this.expanded.delete(id) : this.expanded.add(id);
  }


  increment(id: number) {
    // call your cart service / update state
  }

  decrement(id: number) {
    // make sure it doesn't go below 1
  }

  removeFromCart(id: number) {
    // remove item; also collapse if needed
    if (this.expandedId === id) this.expandedId = null;
  }


}
