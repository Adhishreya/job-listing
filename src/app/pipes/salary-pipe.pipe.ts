import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryPipe'
})
export class SalaryPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return `$${value}`;
  }

}
