import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SearchComponent } from "./search.component";
import { FeaturedPassageComponent } from "./featured-passage/featured-passage.component";
import { SharedModule } from "../shared/shared.module";
import { ComplementSearchComponent } from "./complement-search/complement-search.component";
import { PassageComponent } from "./passage/passage.component";
import { LabelComponent } from "./complement-search/label/label.component";
import { PricesComponent } from "./complement-search/prices/prices.component";
import { StopsComponent } from "./complement-search/stops/stops.component";
import { CompaniesComponent } from "./complement-search/companies/companies.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../core/material/material.module";
import { SearchRoutingModule } from "./search-routing.module";

@NgModule({
    declarations: [
        SearchComponent,
        FeaturedPassageComponent,
        ComplementSearchComponent,
        PassageComponent,
        LabelComponent,
        StopsComponent,
        PricesComponent,
        CompaniesComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        MaterialModule,
        SearchRoutingModule
    ],
    exports: [
        SearchComponent,
        FeaturedPassageComponent,
        ComplementSearchComponent,
        PassageComponent,
        LabelComponent,
        StopsComponent,
        PricesComponent,
        CompaniesComponent,
    ]
})
export class SearchModule { }