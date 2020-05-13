import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionProvider} from '../providers/question.provider';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  private pseudo: string;
  private difficulty: string;
  public current = 0;
  public answered = '';
  public answers = [];
  public questions  = [];
  public checkAnswer = false;
  public score = 0;
  public finished = false;
  public loading = true;

  constructor(private route: ActivatedRoute, private questionProvider: QuestionProvider, private router: Router) {
    this.route.params.subscribe((params) => {
      this.pseudo = params['pseudo'];
      this.difficulty = params['difficulty'];
    });
  }

  ngOnInit() {
    this.questionProvider.search(this.difficulty).then((response) => {
      this.questions = response;
      this.fillAndSuffleQuestions();
      this.loading = false;
    }).catch((err) => {
      console.log(err);
    });
  }


  check() {
    this.checkAnswer = true;
  }

  next() {
    this.setScore();
    this.current++;
    this.fillAndSuffleQuestions();
    this.checkAnswer = false;
  }

  setScore() {
    if (this.answered === this.questions[this.current].correct_answer) {
      this.score++;
    }
  }

  fillAndSuffleQuestions() {
    this.answers = this.questions[this.current].incorrect_answers;
    this.answers.push(this.questions[this.current].correct_answer);
    this.answers = this.randomize(this.answers);
  }

  randomize(tab) {
    let i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = tab[i];
      tab[i] = tab[j];
      tab[j] = tmp;
    }
    return tab;
  }

  end() {
    if (!this.finished) {
      this.setScore();
      this.router.navigate(['/score', this.score]).then();
    }
  }

}
