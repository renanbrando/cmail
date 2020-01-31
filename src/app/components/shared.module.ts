import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormFieldDirective } from './form-group/form-field.directive';
import { RouterModule } from '@angular/router';
import { EmailsListComponent } from './emails-list/emails-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FormGroupComponent,
    FormFieldDirective,
    EmailsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FormGroupComponent,
    FormFieldDirective,
    EmailsListComponent
  ]
})
export class SharedModule { }
