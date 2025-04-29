import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { ContainerComponent } from '../shared/container/container.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CardComponent } from '../shared/card/card.component';
import { CardSearchComponent } from '../shared/card-search/card-search.component';
import { CardTestimonyComponent } from '../shared/card-testimony/card-testimony.component';
import { FormSearchComponent } from '../shared/form-search/form-search.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { ControlButtonComponent } from '../shared/control-button/control-button.component';
import { DropdownStateComponent } from '../shared/dropdown-state/dropdown-state.component';
import { PassengerSelectorComponent } from '../shared/passenger-selector/passenger-selector.component';
import { HeaderComponent } from '../shared/header/header.component';
import { BannerComponent } from '../shared/banner/banner.component';
import { UserFormComponent } from '../shared/user-form/user-form.component';
import { MaterialModule } from "../core/material/material.module";

@NgModule({
    declarations: [
        HeaderComponent,
        BannerComponent,
        CardSearchComponent,
        CardTestimonyComponent,
        FormSearchComponent,
        ModalComponent,
        ControlButtonComponent,
        DropdownStateComponent,
        PassengerSelectorComponent,
        ContainerComponent,
        FooterComponent,
        CardComponent,
        UserFormComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports: [
        HeaderComponent,
        BannerComponent,
        CardSearchComponent,
        CardTestimonyComponent,
        FormSearchComponent,
        ModalComponent,
        ControlButtonComponent,
        DropdownStateComponent,
        PassengerSelectorComponent,
        ContainerComponent,
        FooterComponent,
        CardComponent,
        UserFormComponent,
    ]
})
export class SharedModule { }