import { Component } from '@angular/core';

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
  public running = false;

  constructor() {}

  register() {
    if (!this.pseudo || this.pseudo.length < 3) {
      this.error = 'Veuillez rentrer un peudo et une difficulté';
      return;
    }
    this.error = '';
    this.start();
  }
  start() {
    this.running = true;
  }
}
