import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  theme: boolean;

  constructor(
    private menu: MenuController
  ) { }

  ngOnInit() {
    console.log("init 'settings'");

    this.loadTheme();
  }

  eraseStorage() {
    localStorage.setItem('rememberLogin', null);
    localStorage.setItem('login_email', null);
    localStorage.setItem('login_password', null);

    localStorage.setItem("theme", "false");
    document.body.setAttribute("theme", "light");
    this.theme = false;
  }

  toggleMenu() {
    this.menu.enable(true, 'mainMenu');
    this.menu.toggle('mainMenu');
  }

  loadTheme() {
    if (localStorage.getItem("theme") == "true") {
      this.theme = true;
    } else {
      this.theme = false;
    }
  }

  toggleTheme() {
    console.log(this.theme);
    if (this.theme) {
      console.log("them: true");
      localStorage.setItem("theme", "true");
      document.body.setAttribute("theme", "dark");
    } else {
      console.log("theme: false");
      localStorage.setItem("theme", "false");
      document.body.setAttribute("theme", "light");
    }
    console.log("localStorage theme:", localStorage.getItem("theme"));
  }
}
