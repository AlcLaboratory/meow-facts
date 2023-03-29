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

  constructor(private readonly meowFactsStoreService: MeowFactsStoreService) {}

  ngOnInit(): void {
    this.meowFactsStoreService.loadMeowFacts();
  }
}