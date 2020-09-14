import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageScrollDirective } from './directives/page-scroll.directive';





@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PageScrollDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    PageScrollDirective
  ]
})
export class SharedModule { }
