import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit = 170): any {
    return value.substr(0, value.substr(0, limit).lastIndexOf(' ')) + '...';
  }

}