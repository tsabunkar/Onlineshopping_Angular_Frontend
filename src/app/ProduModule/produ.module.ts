import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {ProductComponent} from "../product/product.component";
import {ProductdetailComponent} from "../product/ProductDetialComponent/productdetail.component";
import {WelcomeComponent} from "../WelcomeComponent/welcome.component";
import {PagenotfoundComponent} from "../PageNotFoundComponent/pagenotfound.component";
import {StarComponent} from "../product/star/star.component";
import {ConverttospacePipe} from "../MyCustomPipes/converttospace.pipe";
import {MyproductGuard} from "../CustomGuard/myproduct.guard";
import {ProductEditComponent} from "../product/ProductEditComponent/product-edit.component";
import {AddnewproductComponent} from "../AddNewProductComponent/addnewproduct.component";
// This module is meant for -> Abstracting The app.module.ts
//ie Instead of configuring all the Comp, pipes, Service in app.module.ts
// we have abstacted some of the comp, pipes , services that are belong to productComp
// into this produ.module.ts
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path : "products" , component : ProductComponent},
      {path : "products/:myId" , canActivate:[MyproductGuard] , component : ProductdetailComponent},
      {path : "welcome" , component : WelcomeComponent},
      {path : "pagenotfound" , component : PagenotfoundComponent},
      {path : "productedit/:editedId", component : ProductEditComponent},
      {path : "addproduct", component : AddnewproductComponent},
      {path : "" , redirectTo : "welcome", pathMatch : "full"},
      {path : "**" , redirectTo : "pagenotfound", pathMatch : "full"}
          ])
  ],
  declarations: [ProductComponent,
                ProductdetailComponent,
                StarComponent,
                 ConverttospacePipe,
                ProductEditComponent
                ],
  exports : [ProductComponent,
    ProductdetailComponent,
    StarComponent,
    ConverttospacePipe,
    FormsModule,
    HttpClientModule,
    RouterModule

  ]
})
export class ProduModule { }
