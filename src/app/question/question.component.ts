import {Component, Input, OnInit} from '@angular/core';
import {QuestionProvider} from '../providers/question.provider';
import * as he from 'he';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
    @Input() pseudo: string;
    @Input() difficulty: string;

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
        this.questionProvider.search(this.difficulty).then((response) => {
            this.questions = response;
            this.questions.forEach((item) => {
                item.question = he.decode(item.question);
            });
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
            this.finished = true;
        }
    }
}
