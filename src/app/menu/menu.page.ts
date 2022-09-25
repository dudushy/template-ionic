import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  buttonPressed: string;

  constructor(
    private menu: MenuController
  ) {
    this.buttonPressed = null;
  }

  youPressed(buttonName) {
    this.buttonPressed = buttonName;
  }

  ngOnInit() {
    console.log('init "menu"');
  }

  toggleMenu() {
    this.menu.enable(true, 'mainMenu');
    this.menu.toggle('mainMenu');
  }
}
