import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-meow-fact-item',
  templateUrl: './meow-fact-item.component.html',
  styleUrls: ['./meow-fact-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeowFactItemComponent {
  @Input() meowFact?: string;
}
