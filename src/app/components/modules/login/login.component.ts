import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login
  mensagemErro: ''

  constructor(private loginService: LoginService, private router: Router) {
    this.login = new Login({ email: '', password: ''})
   }

  ngOnInit() {
  }

  handleLogin(formLogin: NgForm) {
    if (formLogin.valid) {
      this.loginService.login(this.login)
        .subscribe(
          () => {
            this.router.navigate(['/inbox'])
            console.log('deu bom');
          },
          (error) => {
            this.mensagemErro = error.error.message
            console.log(error);
            console.log('deu ruim');
          }
        )
    }
  }

}
