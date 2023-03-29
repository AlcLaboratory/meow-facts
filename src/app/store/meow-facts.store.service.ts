import { Injectable } from "@angular/core";
import { BehaviorSubject, finalize, map, take } from "rxjs";
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

  loadMeowFacts(count?: number): void {
    this.isLoading.next(true);

    this.meowFactsApiService.getMeowFacts(count).pipe(
      take(1),
      finalize(() => this.isLoading.next(false)),
      map(facts => this.getUniqueMeowFacts(facts))
    ).subscribe({
      next: facts => this.addMeowFacts(facts),
      error: () => alert('Wystąpił problem z pobieraniem danych.')
    });
  }

  private addMeowFacts(factsToAdd: string[]): void {
    const allFacts = this.meowFacts.getValue() ?? [];
    this.meowFacts.next([...allFacts, ...factsToAdd]);
  }

  private getUniqueMeowFacts(facts: string[]): string[] {
    return facts?.filter(fact => !this.checkIfMeowFactExists(fact));
  }

  private checkIfMeowFactExists(fact: string): boolean {
    const allFacts = this.meowFacts.getValue() ?? [];

    return !!allFacts.find(meowFact => meowFact === fact);
  }
}
