import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  theme: boolean;

  constructor(
    private menu: MenuController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    console.log('init "settings"');

    this.loadTheme();
  }

  async eraseStorage(topic: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'alerts',
      header: topic,
      message: msg,
      buttons: [
        {
          cssClass: 'alerts-cancel',
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('[eraseStorage] CANCEL');
          }
        },
        {
          cssClass: 'alerts-accept',
          text: 'Accept',
          handler: () => {
            console.log('[eraseStorage] ACCEPT');

            localStorage.setItem('rememberLogin', null);
            localStorage.setItem('login_email', null);
            localStorage.setItem('login_password', null);

            localStorage.setItem('theme', null);
            document.body.setAttribute('theme', 'light');
            this.theme = false;
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  toggleMenu() {
    this.menu.enable(true, 'mainMenu');
    this.menu.toggle('mainMenu');
  }

  loadTheme() {
    if (localStorage.getItem('theme') == 'true') {
      this.theme = true;
    } else {
      this.theme = false;
    }
  }

  toggleTheme() {
    console.log(this.theme);
    if (this.theme) {
      console.log('them: true');
      localStorage.setItem('theme', 'true');
      document.body.setAttribute('theme', 'dark');
    } else {
      console.log('theme: false');
      localStorage.setItem('theme', 'false');
      document.body.setAttribute('theme', 'light');
    }
    console.log('localStorage theme:', localStorage.getItem('theme'));
  }
}
