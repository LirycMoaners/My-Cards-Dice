import { NgModule } from '@angular/core';

import { routedComponents, GameEditionRoutingModule } from './game-edition-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    GameEditionRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    routedComponents
  ],
  entryComponents: [
  ]
})
export class GameEditionModule { }
