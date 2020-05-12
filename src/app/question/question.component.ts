import {Component, Input, OnInit} from '@angular/core';
import {QuestionProvider} from '../providers/question.provider';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
    @Input() pseudo: string;

    public current = 0;
    public answered = '';
    public answers = [];
    public questions  = [];
    public checkAnswer = false;
    public score = 0;
    public finished = false;

    constructor(private questionProvider: QuestionProvider) {
    }

    ngOnInit(): void {
        this.questionProvider.search().then((response) => {
            this.questions = response;
            this.fillAndSuffleQuestions();
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
        if (this.answered === this.questions[this.current].correctAnswer) {
            this.score++;
        }
    }

    fillAndSuffleQuestions() {
        this.answers = this.questions[this.current].incorrectAnswers;
        this.answers.push(this.questions[this.current].correctAnswer);
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
            this.finished = true;
        }
    }
}
