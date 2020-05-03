import { NgModule } from '@angular/core';

import { routedComponents, GameCategoryRoutingModule } from './game-category-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [routedComponents],
  imports: [
    SharedModule,
    GameCategoryRoutingModule
  ]
})
export class GameCategoryModule { }
