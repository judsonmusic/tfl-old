import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myfilter'
})
@Injectable()
export class MyFilterPipe implements PipeTransform {
  transform(items: any[], args: any[]): any {
    console.log(args);
    return items.filter(item => item.id == args);
  }
}
