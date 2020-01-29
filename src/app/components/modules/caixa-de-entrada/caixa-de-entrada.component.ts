import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})

export class CaixaDeEntradaComponent implements OnInit{
  title: String;
  private _isNewEmailOpen: Boolean;
  get isNewEmailOpen() {
    return this._isNewEmailOpen
  }
  emailList: Array < Object > ;
  // email: Object;
  email = {
    para: '',
    assunto: '',
    conteudo: ''
  }

  constructor(private emailService: EmailService) {
    this.title = 'Titulo da sua página atual';
    this._isNewEmailOpen = false;
    this.emailList = []
  }

  ngOnInit() {
    this.emailService.list()
    .subscribe((response: any) => {
      // event.preventDefault()
      console.log(response);
      this.emailList = response
    }, (error) => console.log(error));
  }

  toggleEmail() {
    this._isNewEmailOpen = !this._isNewEmailOpen;
  }

  setValue(event, target) {
    this.email[target] = event.target.value;
    console.log(this.email);
  }

  handleEmail(form: NgForm) {
    console.log(form);

    if (form.invalid) return;

    this.emailService.send(this.email)
      .subscribe((response: any) => {
        // event.preventDefault()
        console.log(response);
        this.emailList.push(response)

        this.email = {
          para: '',
          assunto: '',
          conteudo: ''
        };

        form.reset();
        this.toggleEmail()
      }, (error) => console.log(error));
    
  }

}
