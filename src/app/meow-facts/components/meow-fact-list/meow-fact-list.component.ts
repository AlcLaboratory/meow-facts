import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meow-fact-list',
  templateUrl: './meow-fact-list.component.html',
  styleUrls: ['./meow-fact-list.component.scss']
})
export class MeowFactListComponent {
  @Input() isLoading: boolean = false;
  @Input() meowFacts: string[] = [];
}
