import { Component, OnInit } from '@angular/core';
import { MeowFactsStoreService } from 'src/app/store/meow-facts.store.service';

@Component({
  selector: 'app-meow-facts',
  templateUrl: './meow-facts.component.html',
  styleUrls: ['./meow-facts.component.scss'],
})
export class MeowFactsComponent implements OnInit {
  readonly isLoading$ = this.meowFactsStoreService.isLoading$;
  readonly meowFacts$ = this.meowFactsStoreService.meowFacts$;
  readonly countMeowFactsLoadedPerScroll = 5;

  constructor(private readonly meowFactsStoreService: MeowFactsStoreService) {}

  ngOnInit(): void {
    this.loadMeowFacts(10);
  }

  onScrolled(): void {
    this.loadMeowFacts();
  }

  private loadMeowFacts(count: number = this.countMeowFactsLoadedPerScroll): void {
    this.meowFactsStoreService.loadMeowFacts(count);
  }
}
