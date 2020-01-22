import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/modules/cadastro/cadastro.component';
import { CaixaDeEntradaComponent } from './components/modules/caixa-de-entrada/caixa-de-entrada.component';
import { ModuloRoteamento } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    CaixaDeEntradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
