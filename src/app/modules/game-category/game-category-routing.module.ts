import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameCategoryListComponent } from './game-category-list/game-category-list.component';
import { GameCategoryEditionComponent } from './game-category-edition/game-category-edition.component';

const routes: Routes = [
  {
    path: '',
    component: GameCategoryListComponent
  },
  {
    path: 'create',
    component: GameCategoryEditionComponent
  },
  {
    path: ':id/edit',
    component: GameCategoryEditionComponent
  },
  {
    path: ':id',
    redirectTo: ':id/edit'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class GameCategoryRoutingModule { }

export const routedComponents = [
  GameCategoryListComponent,
  GameCategoryEditionComponent
];

