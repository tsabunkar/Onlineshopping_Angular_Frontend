import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CProduct} from "../DTO/CProduct";
import {CustomProductService} from "../MyCustomServices/custom-product.service";
import {Router} from "@angular/router";
import swal from 'sweetalert2'
import {IProduct} from "../product/product";

@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.component.html',
  styleUrls: ['./addnewproduct.component.css']
})
export class AddnewproductComponent implements OnInit {

  constructor(private formBuilderObj : FormBuilder
              , private _myHttpService: CustomProductService
              ,private _routerObj : Router) { }

  formGroupObj : FormGroup;

  ngOnInit() {
    this.formGroupObj = this.formBuilderObj.group({
      myproductId : ['', [Validators.pattern('[0-9]*'), Validators.required]],
      myproductName : ['',[Validators.pattern('[a-zA-Z]*'), Validators.required]],
      myproductCode : ['',[Validators.pattern('([a-zA-Z]{3})+-([0-9]{3})+'), Validators.required]],
      myproductAvaliableDate :['', Validators.required],
      myprice : ['', Validators.required],
      myproductRating : ['', Validators.required],
      myproductImage : ['', Validators.required],



    })
  }

  pageTitle : string ="Add New Product"

  mySaveForm(): void{
    console.log("form Model is : ");
    console.log(this.formGroupObj);
    console.log("value is : " + JSON.stringify(this.formGroupObj.value))



    let prod    = new CProduct();
    prod.productIdSetter = this.formGroupObj.get("myproductId").value;
    prod.productNameSetter = this.formGroupObj.get("myproductName").value;
    prod.productCodeSetter = this.formGroupObj.get("myproductCode").value;
    prod.productAvaliableDateSetter = this.formGroupObj.get("myproductAvaliableDate").value;
    prod.priceSetter =  this.formGroupObj.get("myprice").value;
    prod.productRatingSetter =this.formGroupObj.get("myproductRating").value;
    prod.productImageSetter = this.formGroupObj.get("myproductImage").value;
    this.postData(prod);

  }

  postResultData : IProduct;
  errorMess : string;
  postData(prod: CProduct) : void {

    this._myHttpService.postMyProdData_Service_FromBackend(prod)
      .subscribe( (arg : IProduct) => {
          console.log(arg);
          this.postResultData = arg;
         // alert(JSON.stringify(arg) +" ," + " is save successfully")
          this.sweetAlertForPost(arg);
          this._routerObj.navigate(["/products"])
        },
        errorArgs => {
          console.log("Error has occured  :")
          console.log(errorArgs)
          this.errorMess = errorArgs;

        })
  }


  sweetAlertForPost(arg : IProduct){
    swal({
      position: 'top-end',
      type: 'success',
      title: 'your product is added Successfully !!',
      text : JSON.stringify(arg),
      showConfirmButton: false,
      timer: 1500
    })

  }
}
