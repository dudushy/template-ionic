import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(
    private menu: MenuController
  ) { }

  ngOnInit() {
    console.log('init "test"');
  }

  toggleMenu() {
    this.menu.enable(true, 'mainMenu');
    this.menu.toggle('mainMenu');
  }
}
