import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'M':
        return '男性';
      case 'F':
        return '女性';
      default:
        return 'N/A';
    }
  }

}
