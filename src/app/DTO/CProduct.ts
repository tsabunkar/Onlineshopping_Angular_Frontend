export class  CProduct{

  private productId: number;
  private productName:  string;
  private productCode:  string;
  private productAvaliableDate: string;
  private price: number;
  private productRating: number;
  private productImage:  string;


  set productIdSetter(value: number) {
    this.productId = value;
  }

  set productNameSetter(value: string) {
    this.productName = value;
  }

  set productCodeSetter(value: string) {
    this.productCode = value;
  }

  set productAvaliableDateSetter(value: string) {
    this.productAvaliableDate = value;
  }

  set priceSetter(value: number) {
    this.price = value;
  }

  set productRatingSetter(value: number) {
    this.productRating = value;
  }

  set productImageSetter(value: string) {
    this.productImage = value;
  }



  //--------------Getter--------------------------

/*  get productIdGetter(): number {
    return this.productId;
  }

  get productNameGetter(): string {
    return this.productName;
  }

  get productCodeGetter(): string {
    return this.productCode;
  }

  get productAvaliableDateGetter(): string {
    return this.productAvaliableDate;
  }

  get priceGetter(): number {
    return this.price;
  }

  get productRatingGetter(): number {
    return this.productRating;
  }

  get productImageGetter(): string {
    return this.productImage;
  }*/

//-----------Constructor-------------

  /* constructor(productId: number, productName: string, productCode: string,
   productAvaliableDate: string, price: number, productRating: number,
   productImage: string) {
   this.productId = productId;
   this.productName = productName;
   this.productCode = productCode;
   this.productAvaliableDate = productAvaliableDate;
   this.price = price;
   this.productRating = productRating;
   this.productImage = productImage;
   }*/
}
