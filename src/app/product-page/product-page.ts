import { Component, inject } from '@angular/core';
import { ProductService } from '../product-service/product-service';
import { Product } from '../types/Product';
import { ActivatedRoute } from '@angular/router';
import { PrimaryButton } from '../shared/primary-button/primary-button';

@Component({
  selector: 'app-product-page',
  imports: [PrimaryButton],
  template: `
    <div
      class="max-w-lg bg-shadow-primary mx-auto shadow-2xl my-6 px-6
   shadow-shadow-primary rounded-2xl p-4 ring-graphite-100/20"
    >
      <h2 class=" text-lg font-bold pb-6 text-ivory-primary tracking-wider">
        {{ product?.prodName }}
      </h2>
      <div class="flex gap-4 h-100 ">
        <!-- Media block -->
        <div
          class="w-64 h-84 shrink-0 flex-col shadow-2xl inset-ring-1 inset-ring-graphite-100/30 "
        >
          <img
            class="w-full h-full object-cover rounded-sm border-2
         border-ivory-400/20"
            [src]="product?.prodPicNameLarge"
            alt=""
          />
          <div
            class=" text-ivory-primary/70 font-extralight italic p-0.5  text-sm text-center border-b-2 border-b-slate-400/20"
          >
            <p>{{ product?.prodDescriptionShort }}</p>
          </div>
        </div>

        <div class="flex flex-col w-full">
          <!-- Content block -->
          <div
            class="flex flex-col gap-2 p-4 bg-graphite-primary h-fit rounded-2xl w-full shadow-2xl inset-ring-1 inset-ring-graphite-100/30"
          >
            <div class="p-1">
              <p class="text-lg text-ivory-primary font-medium tracking-wider ">Price</p>
              <p class="text-sm text-dust-primary font-medium tracking-wider">
                £{{ product?.prodPrice }}
              </p>
            </div>
            <div class="p-1 ">
              <p class="text-md text-ivory-primary font-medium  tracking-wider">In Stock: <span class="text-dust-primary">{{ product?.prodQuantity }}</span></p>

            </div>
            <div class="p-1 ">
              <p class="text-sm tracking-tight font-medium
              text-dust-primary">{{product?.prodDescriptionLong}}</p>
            </div>
          </div>

          <div class="flex flex-row justify-around items-center h-full">
            <app-primary-button type="submit"> Add To Cart </app-primary-button>
          </div>
        </div>
      </div>
    </div>
  `,
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
