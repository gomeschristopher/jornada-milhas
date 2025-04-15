import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormSearchService } from 'src/app/core/services/form-search.service';
import { PassagesService } from 'src/app/core/services/passages.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent {
  minPrice: FormControl<number>;
  maxPrice: FormControl<number>;

  constructor(public passageService: PassagesService,
    private formSearchService: FormSearchService
  ) {
    this.minPrice = this.formSearchService.getControl<number>('minPrice');
    this.maxPrice = this.formSearchService.getControl<number>('maxPrice');
  }
}
