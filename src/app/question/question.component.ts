import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
    @Input() pseudo: string;

    public answer = '';
    public question = 'Quel est la couleur du cheval blanc d\'Henri IV ?';
    public answered = '';

    constructor() {
    }

    ngOnInit(): void {
    }
}
