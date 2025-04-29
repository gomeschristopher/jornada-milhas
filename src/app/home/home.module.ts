import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/core/material/material.module";

import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        HomeRoutingModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {}