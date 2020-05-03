import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../../../core/header/header.service';


@Component({
  selector: 'app-set-edition',
  templateUrl: './set-edition.component.html',
  styleUrls: ['./set-edition.component.scss']
})
export class SetEditionComponent implements OnInit {

  constructor(
    private readonly headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.title = 'Set edition';
  }
}
