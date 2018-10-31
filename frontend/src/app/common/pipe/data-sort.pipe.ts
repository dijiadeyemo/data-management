import { Pipe, PipeTransform } from '@angular/core';
import Data from '../data';

@Pipe({ name: 'sortByField' })
export class SortByFieldPipe implements PipeTransform {
    transform(dataList: Data[], field: string) {
        console.log('transforming', field);
        const sortedList = [...dataList];
        sortedList.sort(function (a, b) {
            if (a[field] < b[field])
                return -1;
            if (a[field] > b[field])
                return 1;
            return 0;
        });
        return sortedList;
    }
}