import {Injectable} from '@angular/core';
import {Question} from '../modele/question';

@Injectable()
export class QuestionProvider {
    constructor() {
    }

    search(): Promise<Array<Question>> {
        return new Promise((resolve, reject) => {
            resolve(
                [
                    {
                        category: 'Entertainment: Japanese Anime & Manga',
                        type: 'multiple',
                        difficulty: 'easy',
                        question: 'In "Fairy Tail", what is the nickname of Natsu Dragneel ?',
                        correctAnswer: 'The Salamander',
                        incorrectAnswers: ['The Dragon Slayer', 'The Dragon', 'The Demon']
                    },
                    {
                        category: 'Entertainment: Video Games',
                        type: 'boolean',
                        difficulty: 'medium',
                        question: '"Return to Castle Wolfenstein" was the only game of the ' +
                            'Wolfenstein series where you don\'t' +
                            ' play as William "B.J." Blazkowicz.',
                        correctAnswer: 'False',
                        incorrectAnswers: ['True']
                    }
                ]
            );
        });
    }
}
