import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    CommonModule,
    FormsModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    PageScrollDirective
  ]
})
export class SharedModule { }
