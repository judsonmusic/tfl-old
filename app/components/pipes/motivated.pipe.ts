import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'motivatedFilter'
})
@Injectable()
export class MotivatedFilterPipe implements PipeTransform {
  transform(items: any[], args: any[]): any {
    //console.log(items, args);
    return items.filter(item => item.subs[3] < 80 && item.subs[5] > 60);
  }
}
