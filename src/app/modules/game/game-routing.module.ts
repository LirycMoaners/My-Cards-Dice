import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameListComponent } from './game-list/game-list.component';
import { GameEditionComponent } from './game-edition/game-edition.component';
import { GamePlayComponent } from './game-play/game-play.component';


const routes: Routes = [
  {
    path: '',
    component: GameListComponent
  },
  {
    path: 'create',
    component: GameEditionComponent
  },
  {
    path: ':id/edit',
    component: GameEditionComponent
  },
  {
    path: ':id',
    component: GamePlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class GameRoutingModule { }

export const routedComponents = [
  GameListComponent,
  GameEditionComponent,
  GamePlayComponent
];
