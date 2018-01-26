import { Component } from '@angular/core';
import {CustomProductService} from "./MyCustomServices/custom-product.service";

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [CustomProductService] // custom - service

})
export class AppComponent {

  pageTitle : string = 'Peoples Product Managament';

}
