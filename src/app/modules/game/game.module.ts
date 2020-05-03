import { NgModule } from '@angular/core';

import { GameRoutingModule, routedComponents } from './game-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    routedComponents
  ],
  imports: [
    SharedModule,
    GameRoutingModule
  ]
})
export class GameModule { }
