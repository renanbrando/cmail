import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetalheEmailComponent } from './detalhe-email.component';

const rotasDetalheEmail: Routes = [
  {
    path: '',
    component: DetalheEmailComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rotasDetalheEmail)
  ],
  exports: [
    RouterModule
  ]
})
export class DetalheEmailRoutingModule { }
