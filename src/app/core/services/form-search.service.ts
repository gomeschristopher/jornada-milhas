import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class FormSearchService {
  formSearch: FormGroup = new FormGroup({
    oneWay: new FormControl(false),
    origin: new FormControl(null),
    destination: new FormControl(null),
    type: new FormControl("Econômica"),
    adults: new FormControl(1),
    children: new FormControl(0),
    babies: new FormControl(0),
  });

  constructor(private dialog: MatDialog) { }

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

  getControl(nome: string): FormControl {
    const control = this.formSearch.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
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
}
