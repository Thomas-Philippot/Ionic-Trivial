export class Question {
    public category: string;
    public type: string;
    public difficulty: string;
    public question: string;
    // tslint:disable-next-line:variable-name
    public correct_answer: string;
    // tslint:disable-next-line:variable-name
    public incorrect_answers: Array<string>;
}
