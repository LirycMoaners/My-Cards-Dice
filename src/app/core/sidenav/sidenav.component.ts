import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { SignInDialogComponent } from '../../modules/account/sign-in-dialog/sign-in-dialog.component';
import { UserService } from '../http-services/user.service';
import { HeaderService } from '../header/header.service';
import { AuthenticationService } from '../http-services/authentication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  /**
   * Sidenav menu links with name and icon
   */
  public menuItems = [
    { label: 'Games', link: '/games', icon: 'home' },
    { label: 'Game categories', link: '/game-categories', icon: 'add_circle' },
    { label: 'Sets', link: '/sets', icon: 'add_circle' },
    { label: 'Help', link: '/infos/help', icon: 'help' },
    { label: 'About', link: '/infos/about', icon: 'info' }
  ];

  constructor(
    public headerService: HeaderService,
    public userService: UserService,
    private readonly router: Router,
    private readonly dialog: MatDialog,
    private readonly authenticationService: AuthenticationService
  ) { }

  /**
   * Open the log in popup
   */
  public openSignInDialog(): void {
    this.headerService.toggleMenu.emit();
    const dialogRef = this.dialog.open(SignInDialogComponent, { data: { isSignUpButtonPresent: true }});
    dialogRef.afterClosed().subscribe(isSignedIn => {
      if (isSignedIn) {
        this.router.navigate(['/game-list']);
      }
    });
  }

  /**
   * Log out
   */
  public signOut() {
    this.authenticationService.signOut();
    this.headerService.toggleMenu.emit();
    this.router.navigate(['/game-list']);
  }
}
