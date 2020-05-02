import { NgModule } from '@angular/core';

import { routedComponents, CurrentGameRoutingModule } from './current-game-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CurrentGameRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    routedComponents,
  ],
  entryComponents: [
  ]
})
export class CurrentGameModule { }
