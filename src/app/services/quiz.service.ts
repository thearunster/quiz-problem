import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilityService } from 'src/app/services/utility.service';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private url =
    'https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=multiple';

  constructor(
    private httpClient: HttpClient,
    private utility: UtilityService
  ) {}

  getQuestions(isRandom: boolean = false): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      map((data: any) => {
        return isRandom ? this.utility.shuffle(data.results) : data.results;
      })
    );
  }
}
