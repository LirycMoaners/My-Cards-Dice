import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../../../core/header/header.service';


@Component({
  selector: 'app-game-category-edition',
  templateUrl: './game-category-edition.component.html',
  styleUrls: ['./game-category-edition.component.scss']
})
export class GameCategoryEditionComponent implements OnInit {

  constructor(
    private readonly headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.title = 'Game category edition';
  }
}
