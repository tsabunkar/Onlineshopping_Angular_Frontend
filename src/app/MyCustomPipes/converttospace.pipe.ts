import { Pipe, PipeTransform } from '@angular/core';

//my custom pipe
@Pipe({
  name: 'convertTOspace'
})
export class ConverttospacePipe implements PipeTransform {

  transform(myvalue: string, mycharacter: string): string {
   let result =  myvalue.replace(mycharacter,' ');
    return result;
  }

}
