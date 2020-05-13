import {Injectable} from '@angular/core';
import {Question} from '../modele/question';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class QuestionProvider {
    constructor(private http: HttpClient) {
    }

    search(difficulty): Promise<Array<Question>> {
            let params = new HttpParams();
            params = params.append('amount', '10');
            params = params.append('difficulty', difficulty);
            return new Promise((resolve, reject) => {
            this.http.get('https://opentdb.com/api.php', { params }).toPromise().then((response) => {
                resolve(response['results']);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
