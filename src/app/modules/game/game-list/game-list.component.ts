import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../../../core/header/header.service';

/**
 * Component showing the list of every game
 *
 * @export
 */
@Component({
  selector: 'app-game-list',
  templateUrl: 'game-list.component.html',
  styleUrls: ['game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(
    private readonly headerService: HeaderService
  ) { }

  ngOnInit() {
    this.headerService.title = 'Game list';
  }
}
