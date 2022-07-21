import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  theme: boolean;

  constructor(
    private router: Router,
    private menu: MenuController
  ) { }

  ngOnInit() {
    console.log("init 'app.component'");
  }

  redirectTo(url: string) {
    console.log("redirect -> " + url);
    this.router.navigateByUrl('/' + url);

    this.toggleMenu();
  }

  toggleMenu() {
    this.menu.enable(true, 'mainMenu');
    this.menu.toggle('mainMenu');
  }
}
