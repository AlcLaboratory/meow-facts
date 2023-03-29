import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meow-fact-list',
  templateUrl: './meow-fact-list.component.html',
  styleUrls: ['./meow-fact-list.component.scss'],
})
export class MeowFactListComponent {
  @Input() isLoading: boolean = false;
  @Input() meowFacts: string[] = [];

  @Output() readonly scrolled = new EventEmitter<void>();

  readonly scrollThrottleMiliseconds = 500;

  onScrolled(): void {
    this.scrolled.emit();
  }

  trackByIndex(index: number) {
    return index;
  }
}
