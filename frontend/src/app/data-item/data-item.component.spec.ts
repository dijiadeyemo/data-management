import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import DataItemComponent from './data-item.component';
import Data from '../common/domain/data';

describe('DataItemComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                DataItemComponent
            ],
            providers: [
                DataItemComponent,
            ]
        }).compileComponents();
    }));

    it('should create the component', () => {
        const fixture = TestBed.createComponent(DataItemComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });


    it('should render title in a h1 tag', () => {
        const fixture = TestBed.createComponent(DataItemComponent);
        const data: Data = {
            id: 20,
            city: 'Lagos',
            status: 'Open',
            color: '#11111',
            price: '23.45',
            startDate: new Date('2018-01-01'),
            endDate: new Date('2018-01-01'),
        }
        fixture.componentInstance.data =data;
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('td').textContent).toContain('20');
    });
});
