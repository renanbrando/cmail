import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/modules/login/login.component";
import { CadastroComponent } from './components/modules/cadastro/cadastro.component';
import { CaixaDeEntradaComponent } from './components/modules/caixa-de-entrada/caixa-de-entrada.component';

const rotas: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'inbox', component: CaixaDeEntradaComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: '', pathMatch: 'full', redirectTo: 'inbox' },
    { path: '**', pathMatch: 'full', redirectTo: 'login'}
]

export const ModuloRoteamento = RouterModule.forRoot(rotas);