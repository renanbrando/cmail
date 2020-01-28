import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const rotas: Routes = [
  {
    path: 'cadastro',
    loadChildren: () => import('./components/modules/cadastro/cadastro.module')
      .then(m => m.CadastroModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/modules/login/login.module')
      .then(m => m.LoginModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./components/modules/caixa-de-entrada/caixa-de-entrada.module')
      .then(m => m.CaixaDeEntradaModule)
  },
  {
    path: '',
    redirectTo: 'inbox',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
