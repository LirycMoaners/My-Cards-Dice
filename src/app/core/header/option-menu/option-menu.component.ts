import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header.service';

/**
 * Component of the option menu
 *
 * @export
 */
@Component({
  selector: 'app-option-menu',
  templateUrl: 'option-menu.component.html',
  styleUrls: ['option-menu.component.scss']
})
export class OptionMenuComponent implements OnInit {

  constructor(
    public headerService: HeaderService
  ) { }

  ngOnInit() { }
}
