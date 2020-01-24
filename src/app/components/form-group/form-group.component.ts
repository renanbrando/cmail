import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {
  textoDaLabel: String;
  idCampo: String;
  @Input() campo = new FormControl();

  constructor(
    private elemento: ElementRef
  ) {
    this.textoDaLabel = '';
    this.idCampo = '';
  }

  ngOnInit() {
    console.log(this.campo)
    const campo = this.elemento.nativeElement.querySelector('input');
    this.textoDaLabel = campo.name.replace(campo.name[0], campo.name[0].toUpperCase());
    this.idCampo = campo.name
  }

}
