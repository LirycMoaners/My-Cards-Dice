import { Component, OnInit } from '@angular/core';

import { HeaderService } from 'src/app/core/header/header.service';


@Component({
  selector: 'app-set-test',
  templateUrl: './set-test.component.html',
  styleUrls: ['./set-test.component.scss']
})
export class SetTestComponent implements OnInit {

  constructor(
    private readonly headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.title = 'Set test'
  }
}
