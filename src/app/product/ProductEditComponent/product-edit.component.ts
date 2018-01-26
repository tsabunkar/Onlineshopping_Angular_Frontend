import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
import {CustomProductService} from "../../MyCustomServices/custom-product.service";
import {IProduct} from "../product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CProduct} from "../../DTO/CProduct";
import swal from 'sweetalert2'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {



  constructor(private activatedRouteObj : ActivatedRoute
          , private _myHttpService : CustomProductService
          ,private formBuilderObj : FormBuilder
          ,private _routerObj: Router) {

    //Intial Validation
    //It can be written in ngOnInit() method (or) inside the constructor
    this.formGroupObj = this.formBuilderObj.group({
      myproductId: [{value :'', disabled: true },  [Validators.pattern('[0-9]*'), Validators.required]],
      myproductName: ['', [Validators.pattern('[a-zA-Z]*'), Validators.required]],
      myproductCode: ['', [Validators.pattern('([a-z]{3})+-([0-9]{3})+'), Validators.required]],
      myproductAvaliableDate: ['', Validators.required],
      myprice: ['', Validators.required],
      myproductRating: ['', Validators.required],
      myproductImage: ['', Validators.required],

    })
  } //end of constructor()


// this subscriptionObj is used to subscribe or unsubscribe
  // we unsubscibe the Observable only when editing is finished.
  private subscriptionObj: Subscription;

  pageTitle : string = "Edit form"
  product : IProduct;
  errorMess : string;
  formGroupObj : FormGroup;



  ngOnInit() {
    //activatedRouteObj is used to get the Particular Product to edit from url
    // Thus, we are reading the Product Id from the route Param (ie URI pathParma)
    let id;
    this.subscriptionObj = this.activatedRouteObj.params.subscribe(
      pathParam => {
        // let id = parseInt(pathParam["editedId"])
        // or

        id = +pathParam["editedId"]
        console.log("Product Id to be editied is : " + id);
        this.getProduct(id);
      }
    )


  } // end of ngOnInit


  getProduct(idReterieved : number){
    //This code is to reterieve the Data from backend using service class
          this._myHttpService
              .getParticularProducts_Service_FromBackend(idReterieved)
              .subscribe(  (singleProd : IProduct) => {
                  this.onProductRetrieved(singleProd)
                },
                err => this.errorMess = err
              )
    } //end of getProduct()


      onProductRetrieved(singleProd: IProduct): void {

        this.product = singleProd;

      //update the data on the form
        this.formGroupObj.patchValue({

          myproductId : this.product.productId,
          myproductName : this.product.productName,
          myproductCode : this.product.productCode,
          myproductAvaliableDate :this.product.productAvaliableDate,
          myprice : this.product.price,
          myproductRating : this.product.productRating,
          myproductImage : this.product.productImage,

        })

      } // end of onProductRetrieved()


  ngOnDestroy(): void {
    this.subscriptionObj.unsubscribe();
  }


  mySaveForm(){
      let prod    = new CProduct();
    prod.productNameSetter = this.formGroupObj.get("myproductName").value;
    prod.productCodeSetter = this.formGroupObj.get("myproductCode").value;
    prod.productAvaliableDateSetter = this.formGroupObj.get("myproductAvaliableDate").value;
    prod.priceSetter =  this.formGroupObj.get("myprice").value;
    prod.productRatingSetter =this.formGroupObj.get("myproductRating").value;
    prod.productImageSetter = this.formGroupObj.get("myproductImage").value;

   // console.log("After clicking POST button")
      this._myHttpService.putproduct_Service_FromBackend(prod,this.formGroupObj.get("myproductId").value)
                        .subscribe( (arg : string) => {
                            console.log(arg);
                            //this.postResultData = arg;
                            //alert(arg)
                          this.sweetAlertForPut(arg);

                          },
                          errorArgs => {
                            console.log("Error has occured  :")
                            console.log(errorArgs)
                            this.errorMess = errorArgs;

                          })

   }// end of mySaveForm()


  sweetAlertForPut(arg: string){
    swal({
      title: 'Your Product is getting updated',
      html: '<h4>Mean While Breath-In and Breath-Out !!</h4>',
      timer: 3000,
      onOpen: () => {
        swal.showLoading()
      }
    }).then((result) => {
      if (result.dismiss === 'timer') {
       // console.log('I was closed by the timer')

        // After 3 seconds  navigate ur page to productList Page
        this._routerObj.navigate(["/products"])
      }
    })
  }// end of sweetAlertForPut()


}
