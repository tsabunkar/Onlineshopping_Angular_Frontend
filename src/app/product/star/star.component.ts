import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

  @Input() rating : number;
  starWidth : number;

  ngOnChanges(): void{
   // console.log("Rating is :" +this.rating)
    //this.starWidth = this.rating * 140/5;   // this formual is for Bar
    this.starWidth = this.rating * 86/5;
  }

  @Output() mynotify : EventEmitter<string> = new EventEmitter<string>();

  childFun(): void {
    this.mynotify.emit(` with ${this.rating} stars was clicked `);
  //  console.log("From child component : ")
 //   console.log(`The rating is ${this.rating} was clicked from child comp`);
    // It is not single Quotes -> but its is ` grave symbol
  }

}
