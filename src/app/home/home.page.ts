import { Component } from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {}

  registered() {
    if (!this.pseudo || this.pseudo.length < 3) {
      this.error = 'Veuillez rentrer un peudo et une difficulté';
      return false;
    }
    this.error = '';
    return true;
  }

  start() {
    this.router.navigate(['/game']);
  }

}
