import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import DataListComponent from './data-list.component';
import DataService from '../common/service/data.service';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SortByFieldPipe } from '../common/pipe/data-sort.pipe';
import { FilterByStartDatePipe } from '../common/pipe/data-filter-start-date.pipe';
import { FilterByEndDatePipe } from '../common/pipe/data-filter-end-date.pipe';

class MockDataService {
    getDataList() {
        return [{
            id: 20,
            city: 'Lagos',
            status: 'Open',
            color: '#11111',
            price: '23.45',
            startDate: new Date('2018-01-01'),
            endDate: new Date('2018-01-01')
        }];
    }
}
describe('DataItemComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                OwlDateTimeModule,
                OwlNativeDateTimeModule,
            ],
            declarations: [
                DataListComponent
            ],
            providers: [
                DataListComponent,
                SortByFieldPipe,
                FilterByStartDatePipe,
                FilterByEndDatePipe,
                { provide: DataService, useValue: new MockDataService() }
            ]
        }).compileComponents();
    }));

    it('should create the component', () => {
        const fixture = TestBed.createComponent(DataListComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });


    // it('should render datalist in a table tag', () => {
    //     const fixture = TestBed.createComponent(DataListComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('td').textContent).toContain('20');
    // });
});
