import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertData'
})
export class ConvertDataPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return (value+1).toString();
  }

}
