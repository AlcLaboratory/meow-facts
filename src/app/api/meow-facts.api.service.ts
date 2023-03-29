import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MeowFactsApiService {
  private readonly apiUrl = 'https://meowfacts.herokuapp.com/';

  constructor(private readonly httpClient: HttpClient) {}

  getMeowFacts(): Observable<string> {
    return this.httpClient.get<MeowFact>(this.apiUrl).pipe(
      map(facts => facts?.data)
    );
  }
}
