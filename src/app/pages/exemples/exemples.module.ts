import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExemplesRoutingModule } from './exemples-routing.module';
import { ExemplesComponent } from './exemples.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { InputModule } from 'src/app/shared/input/input.module';


@NgModule({
  declarations: [
    ExemplesComponent
  ],
  imports: [
    CommonModule,
    ExemplesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HeaderModule,
    InputModule
  ]
})
export class ExemplesModule { }
