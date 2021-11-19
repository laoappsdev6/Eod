import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OptionsMenuComponent } from './options-menu/options-menu.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    OptionsMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    OptionsMenuComponent
  ]
})
export class ComponentsModule { }
