import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { GetProductsComponent } from './get-products/get-products.component';

const routes: Routes = [
  {
    path:"products/add",
    component:AddProductComponent
  },
  {
    path:"products/edit/:id",
    component:EditProductComponent
  },
  {
    path:"products",
    component:GetProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
