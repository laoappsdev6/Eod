import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionsRoutingModule } from './options-routing.module';
import { OptionsComponent } from './options.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OptionsComponent
  ],
  imports: [
    CommonModule,
    OptionsRoutingModule,
    ComponentsModule
  ]
})
export class OptionsModule { }
