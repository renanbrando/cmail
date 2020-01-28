import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { FormGroupComponent } from '../../form-group/form-group.component';
import { FormFieldDirective } from '../../form-group/form-field.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared.module';
import { CadastroRoutingModule } from './cadastro-routing.module';



@NgModule({
  declarations: [
    CadastroComponent,
    FormGroupComponent,
    FormFieldDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
