import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { StateService } from 'src/app/core/services/state.service';
import { State } from 'src/app/core/types/types';

@Component({
  selector: 'app-dropdown-state',
  templateUrl: './dropdown-state.component.html',
  styleUrls: ['./dropdown-state.component.scss']
})
export class DropdownStateComponent implements OnInit {
  @Input() matPrefix: string = '';
  @Input() label: string = '';
  filteredOptions = []
  states: State[] = [];
  filteredOptions$?: Observable<State[]>;
  @Input() control!: FormControl;
  @Input() placeholder: string = '';

  constructor(private stateService: StateService) {

  }

  ngOnInit(): void {
    this.stateService.list()
      .subscribe(dados => {
        this.states = dados;
      })
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarUfs(value))
    )
  }


  filtrarUfs(value: string | State): State[] {
    const valorFiltrado = typeof value === 'string' ? value : value.nome;
    const result = this.states.filter(
      state => state.nome.toLowerCase().includes(valorFiltrado)
    )
    return result
  }

  displayFn(state: State) {
    return state && state.nome ? state.nome : '';
  }
}
