import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login
  mensagemErro: ''

  constructor(private httpClient: HttpClient, private router: Router) {
    this.login = new Login({ email: '', password: ''})
   }

  ngOnInit() {
  }

  handleLogin(formLogin: NgForm) {
    if (formLogin.valid) {
      this.httpClient
        .post('http://localhost:3200/login', this.login)
        .subscribe(
          (response: any) => {
            console.log(response);
            localStorage.setItem('token', response.token)
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
