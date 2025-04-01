import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control-button',
  templateUrl: './control-button.component.html',
  styleUrls: ['./control-button.component.scss']
})
export class ControlButtonComponent {
  @Input() operation: 'increment' | 'decrement' = "increment";
  @Input() src = '';
  @Input() alt = '';
}
