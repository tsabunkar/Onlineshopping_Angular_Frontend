import { Injectable } from '@angular/core';
import {IProduct} from "../product/product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import {CProduct} from "../DTO/CProduct";

import {Http, RequestOptions,Headers,Response} from "@angular/http";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class CustomProductService {

  //Here we are hard coding the data
 /* getProducts_Service() : IProduct[] {
    return [
      {
        productId: 1,
        productName: "Hammer",
        productCode:"GND-123",
        productAvaliableDate: "March 12, 2018",
        price : 8000,
        productRating : 4,
        productImage:"https://i.imgur.com/sJUpSpt.jpg"
      },
      {
        productId: 2,
        productName: "Gun",
        productCode:"GND-124",
        productAvaliableDate: "March 17, 2019",
        price : 90000,
        productRating : 2,
        productImage:"https://i.imgur.com/0N8FaGM.jpg"
      },
      {
        productId: 3,
        productName: "Bullet",
        productCode:"GND-125",
        productAvaliableDate: "April 12, 2019",
        price : 1000,
        productRating : 3,
        productImage:"https://i.imgur.com/pVZ97Na.jpg"
      }
    ]
  }*/



  //Using the concept of Http and Observable
  //Getting the data from backend (RestApi created using-> RestFul WebService in java and MySqlDB)

  private _productUrl = "http://localhost:8081/OnlineShoppingRestApi/webapi/productslist";

  constructor(private _httpClient : HttpClient, private _http : Http){}



  getProducts_Service_FromBackend() : Observable<IProduct[]> {
        return this._httpClient
                  .get<IProduct[]>(this._productUrl)
                  .do(args => console.log("My data recieved from backend is :"+ JSON.stringify(args)))
                  .catch(this.handleMyErrorFun);
      }




  getParticularProducts_Service_FromBackend(prodId : number) : Observable<IProduct> {

    return this._httpClient
              .get<IProduct>(this._productUrl +"/"+ prodId)
              .do(args => console.log("My data recieved from backend is :"+ JSON.stringify(args)))
              .catch(this.handleMyErrorFun);
  }




  postMyProdData_Service_FromBackend(productData : CProduct) : Observable<IProduct>{

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let myOptions = new RequestOptions({ headers: headers });

    return this._http
              .post(this._productUrl,productData,myOptions)
              .map( (resp : Response) => resp.json() )
              .do(args => console.log("My data recieved from backend is :"+ JSON.stringify(args)))
              .catch(this.handleMyErrorFun);

  }



  putproduct_Service_FromBackend(prod : CProduct,id : number) : Observable<string> {

    let headers = new Headers();
    headers.append( 'Content-Type', 'application/json' );
    let myOptions = new RequestOptions({ headers: headers });

    return this._http
              .put(this._productUrl+"/"+id, prod, myOptions)
              .map((resp: Response) => resp.text() )
              .do(args => console.log("My data recieved from backend is :"+ JSON.stringify(args)))
              .catch(this.handleMyErrorFun);

  }



  deleteProduct_Service_FromBackend(id : number) : Observable<string>  {
          return this._http
                     .delete(this._productUrl+"/"+id)
                    .map((resp: Response) => resp.text())
                    .do(args => console.log("My data recieved from backend is :"+ JSON.stringify(args)))
                    .catch(this.handleMyErrorFun);
  }




  handleMyErrorFun(httpErrorResponseObj : HttpErrorResponse) {
    console.log(httpErrorResponseObj.message);
    return Observable.throw(httpErrorResponseObj.message);

  }


}
