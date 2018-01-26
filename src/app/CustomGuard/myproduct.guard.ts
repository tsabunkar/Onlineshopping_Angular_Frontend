import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyproductGuard implements CanActivate {

  constructor(private _routerObj : Router){}
  canActivate(myRoutes: ActivatedRouteSnapshot): boolean {
    let id = +myRoutes.url[1].path;
    //is similar to
   //  let id1 = parseInt(myRoutes.url[1].path)

    if(isNaN(id) || id<1 || id>10){
      alert("Invalid product Id !!");
      this._routerObj.navigate(["/products"]);
      return false;
    }
    return true;
  }
}


// if condition (isNaN(id) || id<1 || id>10) check/validates the left and right butttons
// in product details page
// Suppose if we have 10 products in the DB soo we restrict the user to navigate from
//product with id1->1 to product->10
//If user to tries to navigate beyond to  productId = 10 or prior to productId = 1
//Then we will restrict the user to navigate by populating him an Error -> ALert
//Saying ->Invalid product Id !!
