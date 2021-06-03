import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {path:'products', component:ProductListComponent},
  {path:'products/cart', component:CartComponent},
  {path:'products/:id', component:ProductDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
