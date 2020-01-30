import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  api = 'http://localhost:3200/emails'
  headers = new HttpHeaders({
    'Authorization': localStorage.getItem('cmail-token')
  })

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get(this.api, {
      headers: this.headers
    })
  }

  send({para, assunto, conteudo}) {
    const email = {
      to: para,
      subject: assunto,
      content: conteudo
    }
    
    return this.httpClient.post(this.api, email, {
      headers: this.headers
    })
  }

  delete(id) {
    return this.httpClient.delete(`${this.api}/${id}`, { headers: this.headers });
  }
}
