import { Routes } from '@angular/router';
import { IndexPage } from './index-page/index-page';
import { ProductPage } from './product-page/product-page';

export const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    title: 'Index'
  },
  {
    path: 'product/:id',
    component:
      ProductPage,
    title: 'Product Page'
  },
];
