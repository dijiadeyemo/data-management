import { Pipe, PipeTransform } from '@angular/core';
import Data from '../domain/data';

@Pipe({ name: 'filterByStartDate' })
export class FilterByStartDatePipe implements PipeTransform {
    transform(dataList: Data[], startDate: Date) {
        if (startDate instanceof Date)
            return dataList.filter(data =>
                new Date(data.startDate).getTime() >= startDate.getTime());
        return dataList;
    }
}