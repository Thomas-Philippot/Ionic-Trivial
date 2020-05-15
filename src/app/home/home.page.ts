import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public pseudo = '';
  public difficulties = ['easy', 'medium', 'hard'];
  public difficullty = 'easy';
  public error = '';
  public remberMe = false;
  public loggedIn = false;

  constructor(private router: Router, private storage: Storage) {
    storage.get('pseudo').then((val) => {
      this.pseudo = val;
    });
    storage.get('difficulty').then((val) => {
      this.difficullty = val;
    });
  }

  registered() {
    if (!this.pseudo || this.pseudo.length < 3) {
      this.error = 'Veuillez rentrer un peudo et une difficulté';
      return false;
    }
    this.error = '';
    return true;
  }

  start() {
    if (this.remberMe) {
      this.storage.set('pseudo', this.pseudo).then();
      this.storage.set('difficulty', this.difficullty).then();
    }
  }
}
