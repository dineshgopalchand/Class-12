import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (!value) {
      return null;
    }
    const limitVal = args ? args : -1;
    if (limitVal === -1) {
      return value;
    } else {
      return value.substr(0, limitVal) + '...';
    }
  }

}
