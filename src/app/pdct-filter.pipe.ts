import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pdctFilter'
})
export class PdctFilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArr = [];
    for (const item of value) {
      if (item[propName].includes(filterString) ) {
        resultArr.push(item);
      }
    }
    return resultArr;
  }

}
