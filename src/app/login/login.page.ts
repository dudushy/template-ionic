/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

import { Platform } from '@ionic/angular';

import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  rememberLogin: string;
  checkbox_rememberLogin: string;

  login_email: string;
  login_password: string;

  constructor(
    private menu: MenuController,
    public platform: Platform,
    private router: Router,
    public alertController: AlertController
  ) {
    this.rememberLogin = localStorage.getItem('rememberLogin');

    this.login_email = null;
    this.login_password = null;
  }

  ngOnInit() {
    console.log("init 'login'");
  }

  ionViewDidEnter() {
    this.platform.ready().then((readySource) => {
      console.log("enter 'login' -", readySource);

      console.log("rememberLogin", this.rememberLogin);
      console.log("checkbox_rememberLogin", this.checkbox_rememberLogin);

      if (localStorage.getItem('rememberLogin') == 'true') {
        this.checkbox_rememberLogin = "true";
        this.login_email = localStorage.getItem('login_email');
        this.login_password = localStorage.getItem('login_password');

        this.login();
      }
    });
  }

  login() {
    console.log("checkbox_rememberLogin", this.checkbox_rememberLogin);

    console.log("login_email", this.login_email);
    console.log("login_password", this.login_password);

    if ((this.login_email == null || this.login_email == "") && (this.login_password == null || this.login_password == "")) {
      this.showAlert('Login', 'No data provided!');
      return

    } else if (this.login_email == null || this.login_email == "") {
      this.showAlert('Login', 'E-mail not provided!');
      return

    } else if (this.login_password == null || this.login_password == "") {
      this.showAlert('Login', 'Password not provided!');
      return
    }

    if (this.checkbox_rememberLogin) {
      localStorage.setItem('rememberLogin', "true");
      console.log("rememberLogin", localStorage.getItem('rememberLogin'));
    } else {
      localStorage.setItem('rememberLogin', "false");
      console.log("rememberLogin", localStorage.getItem('rememberLogin'));
    }

    localStorage.setItem("login_email", this.login_email);
    localStorage.setItem("login_password", this.login_password);

    this.showAlert('Login', 'Successfully logged in!');
    this.redirectTo("menu");
  }

  async showAlert(topic: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'alerts',
      header: topic,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  togglePasswordPeek(event: any) {
    console.log("event.target.attributes[2].nodeValue", event.target.attributes[2].nodeValue);

    const oldIcon = event.target.attributes[2].nodeValue;
    const passwordInput = document.getElementById('login_password');

    if (oldIcon == "eye") {
      event.target.attributes[2].nodeValue = "eye-off";
      passwordInput['type'] = "text";
    }
    if (oldIcon == "eye-off") {
      event.target.attributes[2].nodeValue = "eye";
      passwordInput['type'] = "password";
    }

    console.log(oldIcon + " -> " + event.target.attributes[2].nodeValue);
  }

  redirectTo(url: string) {
    console.log("redirect -> " + url);
    this.router.navigateByUrl('/' + url);
  }

  toggleMenu() {
    this.menu.enable(true, 'mainMenu');
    this.menu.toggle('mainMenu');
  }
}
