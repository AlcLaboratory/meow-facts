import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonColor = 'accent';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() color: ButtonColor = 'accent';
  @Output() readonly clicked = new EventEmitter<void>();

  onButtonClick(): void {
    this.clicked.emit();
  }

}
