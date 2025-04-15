import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CompanyService } from 'src/app/core/services/company.service';
import { FormSearchService } from 'src/app/core/services/form-search.service';
import { Company } from 'src/app/core/types/types';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  selected: Company[] = [];

  companiesControl: FormControl<number[] | null>

  constructor(
    private companyService: CompanyService,
    private formSearchService: FormSearchService
  ) {

    this.companiesControl = this.formSearchService.getControl<number[] | null>('companies')

  }
  ngOnInit(): void {
    this.companyService.list().subscribe(
      res => {
        this.companies = res;
      }
    )
    this.companiesControl.valueChanges.subscribe(value => {
      if (!value) {
        this.selected = []
      }
    })
  }

  alternarCompany(company: Company, checked: boolean): void {
    if (!checked) {
      this.selected = this.selected.filter(comp => comp != company)
    } else {
      this.selected.push(company)
    }
    this.formSearchService.formSearch.patchValue({
      companies: this.selected.map(comp => Number(comp.id))
    })
  }

  companySelecionada(company: Company): boolean {
    return this.selected.includes(company)
  }
}