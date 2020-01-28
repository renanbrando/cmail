import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = 'http://localhost:3200/login'

  constructor(private httpClient: HttpClient) { }

  login(credentials: Login) {
    return this.httpClient.post(this.api, credentials)
      .pipe(
        map((response: any) => {
          localStorage.setItem('cmail-token', response.token)
        })
      )
  }
}
