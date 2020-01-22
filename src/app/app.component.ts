import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String;
  private _isNewEmailOpen: Boolean;
  get isNewEmailOpen () {
    return this._isNewEmailOpen
  }
  emailList: Array<Object>;
  email: Object;

  constructor() {
    this.title = 'Titulo da sua página atual';
    this._isNewEmailOpen = false;
    this.email = {
      para: '',
      assunto: '',
      conteudo: ''
    }
    this.emailList = []
  }

  toggleEmail() {
    this._isNewEmailOpen = !this._isNewEmailOpen;
  }

  setValue(event, target) {
    this.email[target] = event.target.value;
    console.log(this.email);
  }
  
  handleEmail (form: NgForm) {
    console.log(form);
    
    if (form.invalid) return;
    console.log(this.email);
    
    // event.preventDefault()
    this.emailList.push(this.email)
    
    this.email = {
      para: '',
      assunto: '',
      conteudo: ''
    };

    form.reset();
    this.toggleEmail()
  }
}
