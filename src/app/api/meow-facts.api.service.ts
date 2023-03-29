import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { MeowFacts } from '../api-models/meow-facts.interface';

@Injectable({
  providedIn: 'root'
})
export class MeowFactsApiService {
  private readonly apiUrl = 'https://meowfacts.herokuapp.com/';

  constructor(private readonly httpClient: HttpClient) {}

  getMeowFacts(count: number = 1): Observable<string[]> {
    return this.httpClient.get<MeowFacts>(this.apiUrl, {
      params: {
        count
      }
    }).pipe(
      map(facts => facts?.data)
    );
  }
}
