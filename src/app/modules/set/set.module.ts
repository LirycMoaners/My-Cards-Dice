import { NgModule } from '@angular/core';
import { SetRoutingModule, routedComponents } from './set-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DiceTestComponent } from './set-test/dice-test/dice-test.component';
import { CardsTestComponent } from './set-test/cards-test/cards-test.component';
import { CardsEditionComponent } from './set-edition/cards-edition/cards-edition.component';
import { DiceEditionComponent } from './set-edition/dice-edition/dice-edition.component';


@NgModule({
  declarations: [
    routedComponents,
    DiceTestComponent,
    CardsTestComponent,
    CardsEditionComponent,
    DiceEditionComponent
  ],
  imports: [
    SharedModule,
    SetRoutingModule
  ]
})
export class SetModule { }
