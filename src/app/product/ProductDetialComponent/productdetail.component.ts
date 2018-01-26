import { Component, OnInit } from '@angular/core';
import {IProduct} from "../product";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CustomProductService} from "../../MyCustomServices/custom-product.service";

@Component({
  /*selector: 'app-productdetail',*/
  //selector is not required bcoz we are navigating form one component to another component using
  //Routing technique but not using custom directive tag.
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  pageTitle : string ="Details Of : "  ;
  product : IProduct;
  errorMess  : string;
  public  idReterive : number;
  constructor(private _activatedRouteObj: ActivatedRoute,
              private _productService: CustomProductService,
              private _routerObj: Router)
  { }

  ngOnInit() {


    //  let idReterieved = this._activatedRouteObj.snapshot.paramMap.get("myId");
    //   this.idReterive = parseInt(idReterieved);
    //snpashot apporah is not working for previous and next button clicked
    //Bcoz It only update the url not Template content
    //soo instead of retrieving the value from url using the snapshot approach
    // we will now use subscribe approach.

    let idReterieved;
    this._activatedRouteObj
      .params
      .subscribe((paramObj : Params) => {
          idReterieved = parseInt(paramObj["myId"])
          this.idReterive = idReterieved;
        }
      )

    //This code is to reterieve the Data from backend using service class
    this._productService
      .getProducts_Service_FromBackend()
      .subscribe(myargs => {
          console.log(myargs)
          this.product = myargs[this.idReterive-1]
        },
        err => this.errorMess = err
      )

  }

  backToProductListComp() : void {

    this._routerObj.navigate(["/products"]);

  }

  leftProductComp() : void{
    /*  alert("click activated")*/
    let previousId = +this.idReterive-1;
    this._routerObj.navigate(["/products",previousId]);

    //This code is to reterieve the Data from backend using service class when left button is clicked
    this._productService
      .getProducts_Service_FromBackend()
      .subscribe(myargs => {
          console.log(myargs)
          this.product = myargs[previousId-1]
        },
        err => this.errorMess = err
      )
  }

  rightProductComp() : void{
    let nextId = +this.idReterive+1;
    this._routerObj.navigate(["/products",nextId]);


    this._productService
      .getProducts_Service_FromBackend()
      .subscribe(myargs => {
          console.log(myargs)
          this.product = myargs[nextId-1]
        },
        err => this.errorMess = err
      )
  }


}
