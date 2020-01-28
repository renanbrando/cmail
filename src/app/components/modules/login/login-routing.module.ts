import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared.module';

const rotasLogin: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(rotasLogin)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
