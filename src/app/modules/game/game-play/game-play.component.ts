import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeaderService } from '../../../core/header/header.service';

/**
 * Component of the current game session
 *
 * @export
 */
@Component({
  selector: 'app-game-play',
  templateUrl: 'game-play.component.html',
  styleUrls: ['game-play.component.scss']
})
export class GamePlayComponent implements OnInit, OnDestroy {

  constructor(
    private readonly headerService: HeaderService
  ) { }

  ngOnInit() {
    this.headerService.title = 'Game play';
  }

  ngOnDestroy() { }
}
