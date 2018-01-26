import {Component, OnInit} from '@angular/core';
import {IProduct} from "./product";
import {CustomProductService} from "../MyCustomServices/custom-product.service";
import {Router} from "@angular/router";
import swal from 'sweetalert2'

@Component({
  selector: 'pm-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']

})
export class ProductComponent implements OnInit{

  //Dependency Injection
  constructor (private customProdServ_ReferVara : CustomProductService
                ,private  _routerObj : Router){}


  ratingMessage_RxedFromChildComp: string='';

  productComponentTitle : string = "We are glad you choose " ;
  productNameInItalic : string =  "Peoples Products List ";
  imageWidth : number = 75;
  showImage :boolean = true;
  listFilter : string = "cart";

  productsList : IProduct[];

  toggleImage() : void {
    this.showImage = ! this.showImage;
  }

  parentFun(myargs : string) : void{
    console.log("From Parent Component");
    console.log(myargs)
    this.ratingMessage_RxedFromChildComp = myargs;
    }

  errorMess : string;


    ngOnInit() : void {
                        this.customProdServ_ReferVara
                            .getProducts_Service_FromBackend()
                            .subscribe((myargs : IProduct[]) => {
                              //console.log(myargs)
                              this.productsList = myargs
                                                },
                              err => this.errorMess = err
                                       )
    }




  deleteParticularProduct(id : number){

      this.customProdServ_ReferVara.deleteProduct_Service_FromBackend(id)
                                  .subscribe( (arg : string) =>{
                                    //this.deletedResultData = arg
                                    console.log(arg)
                                    this.sweetAlertDelete(arg)
                                    //alert(arg)

                                  }, err => this.errorMess)

  }


  sweetAlertDelete(arg : string){
    swal({
      title : "Deleted!",
      type : "success",
      text:  arg,
      showCloseButton: true,
      confirmButtonText : 'OK',


    }).then( res => {
      if(res.value) {
        //Once the model(Dialog box) is completed loaded with animations
        // and then ok button is clicked
        // I need to reload the page

        // ie
        //Is to reload the page after deleting the product
        //or else even though product is deleted, but DOM is not updated
        window.location.reload();

      }
    })
   //
  } //end of sweetAlertDelete() method


}
