import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import DataManagerComponent from './data-manager/data-manager.component';
import DataListComponent from './data-list/data-list.component';
import DataItemComponent from './data-item/data-item.component';
import DataService from './common/service/data.service';
import { FilterByEndDatePipe } from './common/pipe/data-filter-end-date.pipe';
import { FilterByStartDatePipe } from './common/pipe/data-filter-start-date.pipe';
import { SortByFieldPipe } from './common/pipe/data-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataManagerComponent,
    DataListComponent,
    DataItemComponent,
    SortByFieldPipe,
    FilterByStartDatePipe,
    FilterByEndDatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
