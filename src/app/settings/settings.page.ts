/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Platform } from '@ionic/angular';

import { AppComponent } from '../app.component';

import { AlertController } from '@ionic/angular';

import { StorageService } from 'src/app/.services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  title = 'SettingsPage';
  theme: any = 'dark';

  themeToggle: any = true;

  constructor(
    public app: AppComponent,
    public platform: Platform,
    private cdr: ChangeDetectorRef,
    public alertController: AlertController,
    public storage: StorageService
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit() {
    console.log(`[${this.title}#ngOnInit]`);
  }

  ionViewDidEnter() {
    this.platform.ready().then((readySource) => {
      console.log(`[${this.title}#ionViewDidEnter] platform.ready`, readySource);

      this.theme = this.storage.get('theme') == null ? 'dark' : this.storage.get('theme');
    });
  }

  defaultOrder() {
    return 0;
  }

  updateView() {
    console.log(`[${this.title}#updateView]`);
    this.cdr.detectChanges();
    this.app.updateView(this.title);
  }

  redirectTo(url: string) {
    this.app.redirectTo(url, this.title);
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
            console.log(`[${this.title}#eraseStorage] CANCEL`);
          }
        },
        {
          cssClass: 'alerts-accept',
          text: 'Accept',
          handler: () => {
            console.log(`[${this.title}#eraseStorage] ACCEPT`);

            localStorage.clear();
            this.theme = 'dark';
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log(`[${this.title}#eraseStorage] role`, role);

    this.updateView();
  }

  toggleTheme() {
    console.log(`[${this.title}#toggleTheme] themeToggle`, this.themeToggle);
    // this.themeToggle = !this.themeToggle;
    this.themeToggle ? this.storage.set('theme', 'dark') : this.storage.set('theme', 'light');

    this.theme = this.storage.get('theme') == null ? 'dark' : this.storage.get('theme');
    console.log(`[${this.title}#toggleTheme] theme`, this.theme);

    this.updateView();
  }
}
