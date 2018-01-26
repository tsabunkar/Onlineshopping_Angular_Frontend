import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "../product/product.component";
import {ProductdetailComponent} from "../product/ProductDetialComponent/productdetail.component";
import {WelcomeComponent} from "../WelcomeComponent/welcome.component";
import {PagenotfoundComponent} from "../PageNotFoundComponent/pagenotfound.component";
import {MyproductGuard} from "../CustomGuard/myproduct.guard";
import {AddnewproductComponent} from "../AddNewProductComponent/addnewproduct.component";
import {ProductEditComponent} from "../product/ProductEditComponent/product-edit.component";

const myRoutes : Routes  = [
  {path : "products" , component : ProductComponent},
  {path : "products/:myId" , canActivate:[MyproductGuard] , component : ProductdetailComponent},
  {path : "welcome" , component : WelcomeComponent},
  {path : "pagenotfound" , component : PagenotfoundComponent},
  {path : "productedit/:editedId", component : ProductEditComponent},
  {path : "addproduct", component : AddnewproductComponent},
  {path : "" , redirectTo : "welcome", pathMatch : "full"},
  {path : "**" , redirectTo : "pagenotfound", pathMatch : "full"}
  ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(myRoutes)
  ],
  declarations: [],
  exports : [RouterModule]
})
export class MyroutingModule { }
