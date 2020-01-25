import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('Renan', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this))
  })

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  validarTodosOsCamposDoFormulario() {
    const camposform = this.formCadastro.controls;
    // this.formCadastro.markAllAsTouched();
    Object.keys(camposform).forEach(field => {
      const control = this.formCadastro.get(field);
      control.markAsTouched({ onlySelf: true });
    })
  }

  handleCadastroUsuario() {
    if (this.formCadastro.valid) {
      const userData = new User(this.formCadastro.value)
      console.log(userData);
      this.httpClient.post('http://localhost:3200/users', userData).subscribe(
        resp => {
          console.log(resp);
          this.formCadastro.reset()
        },
        error => console.error(error)
      )
    } else {
      this.validarTodosOsCamposDoFormulario()
    }
  }

  validaImagem(campoDoFormulario: FormControl) {
    return this.httpClient.head(
      campoDoFormulario.value, {
        observe: 'response'
      }
    ).pipe(
      map(
        (response: HttpResponseBase) => {
          return response.ok ? null : { urlInvalid: true }
        }
      ),
      catchError(error => {
        return [{urlInvalid: true }]
      })
    )
  }

}
