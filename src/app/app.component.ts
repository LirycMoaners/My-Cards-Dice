import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SwUpdate } from '@angular/service-worker';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

import { HeaderService } from './core/header/header.service';

/**
 * My Cards & Dice app main component
 *
 * @export
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /**
   * Sidenav menu
   */
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  constructor(
    public headerService: HeaderService,
    private readonly swUpdate: SwUpdate
  ) {
  }

  ngOnInit(): void {
    this.initServiceWorker();
    this.initSidenav();
    SplashScreen.hide();
  }

  /**
   * Initialize service worker behavior on new version
   */
  private initServiceWorker(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('A new version is available ! Do you want to refresh the app ?')) {
          window.location.reload();
        }
      });
    }
  }

  /**
   * Initialize sidenav behavior when menu button is clicked
   */
  private initSidenav(): void {
    this.headerService.toggleMenu.subscribe(() => this.sidenav.toggle());
  }
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker('./app.worker', { type: 'module' });
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}
