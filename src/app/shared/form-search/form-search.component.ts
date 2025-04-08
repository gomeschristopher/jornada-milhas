import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormSearchService } from 'src/app/core/services/form-search.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent {
  constructor(
    public formSearchService: FormSearchService
  ) { }

  search() {
    console.log(this.formSearchService.formSearch.value);
  }
}
