import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, finalize, take } from "rxjs";
import { MeowFactsApiService } from "../api/meow-facts.api.service";

@Injectable({
  providedIn: 'root'
})
export class MeowFactsStoreService {
  private readonly meowFacts = new BehaviorSubject<string[]>([]);
  readonly meowFacts$ = this.meowFacts.asObservable();

  private readonly isLoading = new BehaviorSubject<boolean>(false);
  readonly isLoading$ = this.isLoading.asObservable();

  constructor(private readonly meowFactsApiService: MeowFactsApiService) {}

  loadMeowFacts(): void {
    this.isLoading.next(true);
    this.meowFactsApiService.getMeowFacts().pipe(
      take(1),
      finalize(() => this.isLoading.next(false)),
      filter(fact => this.checkIfFactExists(fact))
    ).subscribe();
  }

  private checkIfFactExists(fact: string): boolean {
    const facts = this.meowFacts.getValue() ?? [];

    return !!facts.find(meowFact => meowFact === fact);
  }
}
