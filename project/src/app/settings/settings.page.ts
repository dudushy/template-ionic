import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private menu: MenuController
  ) { }

  ngOnInit() {
    console.log("init 'settings'");
  }

  toggleMenu() {
    this.menu.enable(true, 'mainMenu');
    this.menu.toggle('mainMenu');
  }

  // TODO
  // loadTheme() {
  //   if (localStorage.getItem("theme") == "true") {
  //     this.theme = true;
  //   } else {
  //     this.theme = false;
  //   }
  // }

  // TODO
  // toggleTheme() {
  //   console.log(this.theme);
  //   if (this.theme) {
  //     console.log("them: true");
  //     localStorage.setItem("theme", "true");
  //     document.body.setAttribute("color-theme", "dark");
  //   } else {
  //     console.log("theme: false");
  //     localStorage.setItem("theme", "false");
  //     document.body.setAttribute("color-theme", "light");
  //   }
  //   console.log("localStorage theme:", localStorage.getItem("theme"));
  // }

}
