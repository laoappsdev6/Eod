import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayRoutingModule } from './display-routing.module';
import { DisplayComponent } from './display.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DisplayComponent
  ],
  imports: [
    CommonModule,
    DisplayRoutingModule,
    FormsModule
  ]
})
export class DisplayModule { }
