import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToArray'
})
export class NumberToArrayPipe implements PipeTransform {

  transform(value: number, ...args: []): number[] {
    return new Array(value)
      .fill(value)
      .map((_, index) => index + 1);
  }

}
