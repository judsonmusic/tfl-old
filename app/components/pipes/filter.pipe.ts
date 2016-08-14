import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myfilter'
})
@Injectable()
export class MyFilterPipe implements PipeTransform {
  transform(items: any[], args: number): any {
    console.log('FILTER', args, items);
    return items.filter(item => item.id == args);
  }
}
