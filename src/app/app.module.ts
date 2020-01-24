import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/modules/login/login.component';
import { CadastroComponent } from './components/modules/cadastro/cadastro.component';
import { CaixaDeEntradaComponent } from './components/modules/caixa-de-entrada/caixa-de-entrada.component';
import { ModuloRoteamento } from './app.routes';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormFieldDirective } from './components/form-group/form-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    CaixaDeEntradaComponent,
    FormGroupComponent,
    FormFieldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
