import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    SharedModule
  ]
})
export class ErrorModule { }
