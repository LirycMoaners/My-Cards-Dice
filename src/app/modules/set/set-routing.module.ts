import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetListComponent } from './set-list/set-list.component';
import { SetEditionComponent } from './set-edition/set-edition.component';
import { SetTestComponent } from './set-test/set-test.component';

const routes: Routes = [
  {
    path: '',
    component: SetListComponent
  },
  {
    path: 'create',
    component: SetEditionComponent
  },
  {
    path: ':id/edit',
    component: SetEditionComponent
  },
  {
    path: ':id',
    component: SetTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class SetRoutingModule { }

export const routedComponents = [
  SetListComponent,
  SetEditionComponent,
  SetTestComponent
];

