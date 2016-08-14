import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myfilter'
})
@Injectable()
export class MyFilterPipe implements PipeTransform {
  transform(items: any[], args: any[]): any {
    console.log('FILTER', args[0], items);
    return items.filter(item => item.id == args[0]);
  }
}
