import { NgModule } from '@angular/core';

import { routedComponents, InfoRoutingModule } from './info-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    InfoRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [routedComponents]
})
export class InfoModule { }
