import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 5) {
      return value.substr(0, 5) + '...';
    } else {
      return value;
    }
  }

}
