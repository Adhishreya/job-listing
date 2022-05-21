import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryPipe'
})
export class SalaryPipePipe implements PipeTransform {

  transform(value: number,tax:number, ...args: unknown[]): string {
    return `$${value+tax}`;
  }

}
