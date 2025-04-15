import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Featured, Passage, Search, SearchData, SearchResult } from '../types/types';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassagesService {
  private apiUrl: string = environment.apiUrl
  minPrice: number = 0;
  maxPrice: number = 0;

  constructor(private http: HttpClient) { }

  getPassages(search: SearchData) {
    const params = this.convertParamsToString(search);
    const obs = this.http.get<SearchResult>(`${this.apiUrl}/passagem/search?` + params);
    obs.pipe(take(1)).subscribe(res => {
      this.minPrice = res.precoMin;
      this.maxPrice = res.precoMax;
    });
    return obs;
  }

  convertParamsToString(search: SearchData) {
    const query = Object.entries(search).map(([key, value]) => {
      if (!value) {
        return ''
      } else {
        return `${key}=${value}`
      }
    }).join('&');

    return query;
  }

  getFeatured(passages: Passage[]): Featured | undefined {
    if (!passages.length) {
      return undefined;
    }
    let ordenadoPorTempo = [...passages].sort(
      (a, b) => a.tempoVoo - b.tempoVoo
    );
    let ordenadoPorPreco = [...passages].sort((a, b) => a.total - b.total);

    let maisRapida = ordenadoPorTempo[0];
    let maisBarata = ordenadoPorPreco[0];

    let ordenadoPorMedia = [...passages].sort((a, b) => {
      let pontuacaoA =
        (a.tempoVoo / maisBarata.tempoVoo + a.total / maisBarata.total) / 2;
      let pontuacaoB =
        (b.tempoVoo / maisBarata.total + b.total / maisBarata.total) / 2;
      return pontuacaoA - pontuacaoB;
    });
    let sugerida = ordenadoPorMedia[0];

    return { maisRapida, maisBarata, sugerida };
  }
}
