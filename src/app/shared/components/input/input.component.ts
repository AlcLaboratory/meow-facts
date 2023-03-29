import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

type InputType = 'text' | 'password';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() control: FormControl = new FormControl();
  @Input() placeholder: string = '';
  @Input() label?: string;
  @Input() type: InputType = 'text';
}
