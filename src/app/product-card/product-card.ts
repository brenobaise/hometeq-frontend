import { Component, Input } from '@angular/core';
import { Product } from '../types/Product';
import { RouterLink } from '@angular/router';
import { PrimaryButton } from '../shared/primary-button/primary-button';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input({ required: true }) product!: Product;

}
