import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeaderService } from '../../../core/header/header.service';

/**
 * Component for game creation and edition
 *
 * @export
 */
@Component({
  selector: 'app-game-edition',
  templateUrl: 'game-edition.component.html',
  styleUrls: ['game-edition.component.scss']
})
export class GameEditionComponent implements OnInit, OnDestroy {

  constructor(
    private readonly headerService: HeaderService
  ) { }

  ngOnInit() {
    this.headerService.title = 'Game edition';
  }

  ngOnDestroy() { }
}
