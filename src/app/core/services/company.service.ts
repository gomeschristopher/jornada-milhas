import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "src/environments/environment";
import { Company } from "../types/types";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    private apiUrl: string = environment.apiUrl;

    constructor(
        private httpClient: HttpClient
    ) { }

    list(): Observable<Company[]> {
        return this.httpClient.get<Company[]>(`${this.apiUrl}/companhias`)
    }
}