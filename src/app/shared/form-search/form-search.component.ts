import { Component, EventEmitter, Output } from '@angular/core';

import { FormSearchService } from 'src/app/core/services/form-search.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent {
  @Output() makeSearch = new EventEmitter();

  constructor(
    public formSearchService: FormSearchService
  ) { }

  search() {
    if (this.formSearchService.formIsValid) {
      const formSearchValue = this.formSearchService.getSearchData();
      
      this.makeSearch.emit(formSearchValue);
    } else {
      alert('Formulario precisa ser preenchido');
    }
  }
}
