import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

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
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/modules/caixa-de-entrada/caixa-de-entrada.module')
      .then(m => m.CaixaDeEntradaModule)
  },
  {
    path: 'inbox/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/modules/detalhe-email/detalhe-email.module')
      .then(m => m.DetalheEmailModule)
  },
  {
    path: '',
    redirectTo: 'login',
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
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
