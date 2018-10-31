import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import DataManagerComponent from './data-manager/data-manager.component';

const routes: Routes = [
  { path: '', redirectTo: '/data', pathMatch: 'full' },
  {path: 'data', component: DataManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
