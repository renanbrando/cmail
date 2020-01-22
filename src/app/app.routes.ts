import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { CadastroComponent } from './components/modules/cadastro/cadastro.component';
import { CaixaDeEntradaComponent } from './components/modules/caixa-de-entrada/caixa-de-entrada.component';

const rotas: Routes = [
    { path: '', component: LoginComponent },
    { path: 'inbox', component: CaixaDeEntradaComponent },
    { path: 'cadastro', component: CadastroComponent }
]

export const ModuloRoteamento = RouterModule.forRoot(rotas);