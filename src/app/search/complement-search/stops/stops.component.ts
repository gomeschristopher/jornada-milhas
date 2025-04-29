import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormSearchService } from 'src/app/core/services/form-search.service';

interface StopOption {
  display: string;
  value: string;
}

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.scss']
})
export class StopsComponent implements OnInit {
  optionsSelected: StopOption | null = null;
  options: StopOption[] = [
    {
      display: "Direto",
      value: "0"
    },
    {
      display: "1 conexão",
      value: "1"
    },
    {
      display: "2 conexões",
      value: "2"
    },
    {
      display: "Mais de 2 conexões",
      value: "3"
    },
  ];
  connectionsControl: FormControl<null | number>

  constructor(private formSearchService: FormSearchService) {
    this.connectionsControl = this.formSearchService.getControl<number>('connections');
  }

  ngOnInit(): void {
    this.connectionsControl.valueChanges.subscribe(value => {
      if(value === null) {
        this.optionsSelected = null;
      }
    });
  }

  changeStop(option: StopOption, checked: boolean){
    if(!checked){
      this.optionsSelected = null;
      this.formSearchService.formSearch.patchValue({
        connections: null
      })
      return
    }
    this.optionsSelected = option
    this.formSearchService.formSearch.patchValue({
      connections: Number(option.value)
    })
  }

  selectedStop(option: StopOption): boolean {
    return this.optionsSelected === option;
  }

  includeStop(option: StopOption) {
    if(!this.optionsSelected) {
      return false;
    }

    return this.optionsSelected.value > option.value;
  }
}
