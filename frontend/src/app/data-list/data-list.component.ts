import { Component, OnInit } from '@angular/core';

import Data from '../common/domain/data';
import DataService from '../common/service/data.service';

@Component({
    selector: 'data-list',
    templateUrl: './data-list.component.html',
    styleUrls: ['./data-list.component.css']
})
class DataListComponent implements OnInit {

    private dataList: Data[];
    private sortField: string;
    private startDate: Date;
    private endDate: Date;

    constructor(
        private dataService: DataService,
    ) {
        this.dataList = [];
    }

    ngOnInit() {
        this.getDataList();
    }

    getDataList(): void {
        this.dataService.getDataList()
            .subscribe(dataList => {
                this.dataList = dataList;
            });
    }

    sortData(field: string) {
        console.log('sorting', field);
        this.sortField = field;
        console.log('sorting field', this.sortField);
    }

}

export default DataListComponent;