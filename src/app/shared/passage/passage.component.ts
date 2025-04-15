import { Component, Input } from '@angular/core';
import { Passage } from 'src/app/core/types/types';

@Component({
  selector: 'app-passage',
  templateUrl: './passage.component.html',
  styleUrls: ['./passage.component.scss']
})
export class PassageComponent {
  @Input() roundTripText!: string;
  @Input() passage!: Passage;
}
