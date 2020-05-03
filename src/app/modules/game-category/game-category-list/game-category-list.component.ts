import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../../../core/header/header.service';


@Component({
  selector: 'app-game-category-list',
  templateUrl: './game-category-list.component.html',
  styleUrls: ['./game-category-list.component.scss']
})
export class GameCategoryListComponent implements OnInit {

  constructor(
    private readonly headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.title = 'Game category list';
  }
}
