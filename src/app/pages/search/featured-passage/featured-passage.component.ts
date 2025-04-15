import { Component, Input } from '@angular/core';
import { Passage } from 'src/app/core/types/types';

@Component({
  selector: 'app-featured-passage',
  templateUrl: './featured-passage.component.html',
  styleUrls: ['./featured-passage.component.scss']
})
export class FeaturedPassageComponent {
  @Input() featuredBy: string = ''
  @Input() passage?: Passage;
  @Input() variant: 'primary' | 'secondary' | 'default'  = 'primary'
}
