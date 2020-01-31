import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { EmailService } from 'src/app/services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { AssuntoPipe } from 'src/app/pipes/assunto.pipe';


@NgModule({
  declarations: [CaixaDeEntradaComponent, AssuntoPipe],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    CaixaDeEntradaRoutingModule
  ],
  providers: [
    EmailService
  ]
})
export class CaixaDeEntradaModule { }
