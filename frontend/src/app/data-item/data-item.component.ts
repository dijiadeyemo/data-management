import { Component, Input } from '@angular/core';

import Data from '../common/domain/data';

@Component({
    selector: '[data-item]',
    templateUrl: './data-item.component.html',
    styleUrls: ['./data-item.component.css']
})
class DataItemComponent {
    @Input()public data: Data;
}

export default DataItemComponent;