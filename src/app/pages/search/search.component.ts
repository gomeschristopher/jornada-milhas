import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { FormSearchService } from 'src/app/core/services/form-search.service';
import { PassagesService } from 'src/app/core/services/passages.service';
import { Featured, Passage, Search, SearchData } from 'src/app/core/types/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  passages: Passage[] = [];
  featured: Featured | undefined;

  constructor(private passagesService: PassagesService,
    private formSerachService: FormSearchService
  ) { }

  ngOnInit(): void {
    const defaultSearch: SearchData = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: "Executiva"
    };

    const search = this.formSerachService.formIsValid ? this.formSerachService.getSearchData() : defaultSearch;

    this.passagesService.getPassages(search)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this.passages = res.resultado;
          this.featured = this.passagesService.getFeatured(this.passages);
          this.formSerachService.formSearch.patchValue({
            minPrice: res.precoMin,
            maxPrice: res.precoMax
          });
        }
      });
  }

  search(event: SearchData) {
    this.passagesService.getPassages(event).subscribe({
      next: (res) => {
        this.passages = res.resultado;
      }
    });
  }
}
