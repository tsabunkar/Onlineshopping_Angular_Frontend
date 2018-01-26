import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WelcomeComponent } from './WelcomeComponent/welcome.component';
import { PagenotfoundComponent } from './PageNotFoundComponent/pagenotfound.component';
import {MyroutingModule} from "./MyRoutingModule/myrouting.module";
import {ProduModule} from "./ProduModule/produ.module";
import {MyproductGuard} from "./CustomGuard/myproduct.guard";
import { AddnewproductComponent } from './AddNewProductComponent/addnewproduct.component';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    AddnewproductComponent,
  ],
  imports: [
    BrowserModule,
    MyroutingModule,
    ProduModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [MyproductGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
