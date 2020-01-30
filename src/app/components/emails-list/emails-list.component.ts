import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsListComponent implements OnInit {

  @Input() list = [];
  @Output('delete') remove = new EventEmitter()

  constructor() { }

  ngOnInit() {
    
  }

  removeEmail(id) {
    if (confirm('Tem certeza')) {
      this.remove.emit(id);
    }
  }

}
