import { Component, EventEmitter, Output } from '@angular/core';
import { FormSearchService } from 'src/app/core/services/form-search.service';
import { PassagesService } from 'src/app/core/services/passages.service';

@Component({
  selector: 'app-complement-search',
  templateUrl: './complement-search.component.html',
  styleUrls: ['./complement-search.component.scss']
})
export class ComplementSearchComponent {
  @Output() makeSearch = new EventEmitter();

  constructor(public formSearchService: FormSearchService,
    private passagesService: PassagesService
  ) {}

  search() {
    if(!this.formSearchService.formIsValid) {
      this.formSearchService.formSearch.markAllAsTouched();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      return
    }
    const formData = this.formSearchService.getSearchData();
    console.log(formData)

    this.makeSearch.emit(formData);
  }

  clear() {
    this.formSearchService.formSearch.patchValue({
      connections: null,
      companies: null,
      minPrice: this.passagesService.minPrice,
      maxPrice: this.passagesService.maxPrice,
    });
  }
}
