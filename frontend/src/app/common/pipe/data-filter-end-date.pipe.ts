import { Pipe, PipeTransform } from '@angular/core';
import Data from '../domain/data';

@Pipe({ name: 'filterByEndDate' })
export class FilterByEndDatePipe implements PipeTransform {
    transform(dataList: Data[], endDate: Date) {
        if (endDate instanceof Date)
            return dataList.filter(data =>
                new Date(data.endDate).getTime() < endDate.getTime());
        return dataList;
    }
}