import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  // transform (value: any )
 transform(value: any , limit: number){
    if (value.length > limit) {
    // return substring
    return value.substr(0, 3) + 'Edited By custom pipe';
    }
  }
}
