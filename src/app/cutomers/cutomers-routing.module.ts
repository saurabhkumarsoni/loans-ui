import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CutomersComponent } from './cutomers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';

const routes: Routes = [{ path: '', component: ListCustomersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CutomersRoutingModule { }
