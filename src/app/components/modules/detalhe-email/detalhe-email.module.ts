import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { EmailService } from 'src/app/services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { DetalheEmailComponent } from './detalhe-email.component';
import { DetalheEmailRoutingModule } from './detalhe-email-routing.module';


@NgModule({
  declarations: [DetalheEmailComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    DetalheEmailRoutingModule
  ],
  providers: [
    EmailService
  ]
})
export class DetalheEmailModule { }
