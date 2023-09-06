import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CutomersRoutingModule } from './cutomers-routing.module';
import { CutomersComponent } from './cutomers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';


@NgModule({
  declarations: [
    CutomersComponent,
    ListCustomersComponent
  ],
  imports: [
    CommonModule,
    CutomersRoutingModule
  ]
})
export class CutomersModule { }
