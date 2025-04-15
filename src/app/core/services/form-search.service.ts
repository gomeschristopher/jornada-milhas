import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { SearchData } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class FormSearchService {
  formSearch: FormGroup;

  constructor(private dialog: MatDialog) {
    const oneWay = new FormControl(false, [Validators.required]);
    const backDate = new FormControl(null, [Validators.required]);

    this.formSearch = new FormGroup({
      oneWay,
      origin: new FormControl(null, [Validators.required]),
      destination: new FormControl(null, [Validators.required]),
      type: new FormControl("Econômica"),
      adults: new FormControl(1),
      children: new FormControl(0),
      babies: new FormControl(0),
      goingDate: new FormControl(null, [Validators.required]),
      backDate,
      connections: new FormControl(null),
      companies: new FormControl(null),
      minPrice: new FormControl(null),
      maxPrice: new FormControl(null),
    });

    oneWay.valueChanges.subscribe(oneWay => {
      if (oneWay) {
        backDate.disable();
        backDate.setValidators(null);
      } else {
        backDate.enable();
        backDate.setValidators([Validators.required]);
      }
      backDate.updateValueAndValidity;
    });
  }

  getPassengersDescription() {
    let description = '';

    const adults = this.formSearch.get('adults')?.value;
    if (adults && adults > 0) {
      description += `${adults} adulto${adults > 1 ? 's' : ''}`;
    }

    const children = this.formSearch.get('children')?.value;
    if (children && children > 0) {
      description += `${description ? ', ' : ''}${children} criança${children > 1 ? 's' : ''}`;
    }

    const babies = this.formSearch.get('babies')?.value;
    if (babies && babies > 0) {
      description += `${description ? ', ' : ''}${babies} bebê${babies > 1 ? 's' : ''}`;
    }

    return description
  }

  getControl<T>(nome: string): FormControl {
    const control = this.formSearch.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl<T>;
  }

  getSearchData(): SearchData {
    const goingDateControl = this.getControl<Date>('goingDate');

    const searchData: SearchData = {
      pagina: 1,
      porPagina: 50,
      somenteIda: this.getControl<boolean>('oneWay').value,
      origemId: this.getControl<number>('origin').value.id,
      destinoId: this.getControl<boolean>('destination').value.id,
      tipo: this.getControl<string>('type').value,
      passageirosAdultos: this.getControl<number>('adults').value,
      passageirosCriancas: this.getControl<number>('children').value,
      passageirosBebes: this.getControl<number>('babies').value,
      dataIda: goingDateControl.value.toISOString()
    };

    const backDateControl = this.getControl<Date>('backDate');
    if (backDateControl.value) {
      searchData.dataVolta = backDateControl.value.toISOString();
    }

    const connectionsControl = this.getControl<number>('connections');
    if (connectionsControl.value) {
      searchData.conexoes = connectionsControl.value;
    }

    const companyControl = this.getControl<number[]>('companies');
    if(companyControl.value){
      searchData.companhiasId = companyControl.value
    }

    const minPriceControl = this.getControl<number>('minPrice');
    if(minPriceControl.value) {
      searchData.precoMin = minPriceControl.value;
    }

    const maxPriceControl = this.getControl<number>('maxPrice');
    if(maxPriceControl.value) {
      searchData.precoMin = maxPriceControl.value;
    }

    return searchData;
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%',
    });
  }

  changeType(event: MatChipSelectionChange, type: string) {
    if (event.selected) {
      this.formSearch.patchValue({
        type
      });
    }
  }

  switchDestiny(): void {
    const origin = this.formSearch.get('origin')?.value;
    const destination = this.formSearch.get('destination')?.value;

    this.formSearch.patchValue({
      origin: destination,
      destination: origin
    });
  }

  get formIsValid() {
    return this.formSearch.valid;
  }
}
