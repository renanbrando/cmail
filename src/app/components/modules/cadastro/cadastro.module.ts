import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared.module';
import { CadastroRoutingModule } from './cadastro-routing.module';



@NgModule({
  declarations: [
    CadastroComponent
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
