import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() type: 'email' | 'password' | 'text' = 'text';
  @Input() label!: string;
  @Input() text!: string;

  @Output() textValue = new EventEmitter<string>();

  emitValue() {
    this.textValue.emit(this.text);
  }

}
