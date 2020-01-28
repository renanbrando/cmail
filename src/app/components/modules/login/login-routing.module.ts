import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

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
    RouterModule.forChild(rotasLogin)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
