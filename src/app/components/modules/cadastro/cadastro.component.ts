import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    senha: new FormControl('', [Validators.required, Validators.pattern(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/g)]),
    avatar: new FormControl('', [Validators.required, Validators.pattern(/((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])*/)])
  })

  constructor() { }

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
      this.formCadastro.reset();
    } else {
      this.validarTodosOsCamposDoFormulario()
    }
  }

}
