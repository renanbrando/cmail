import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmail-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsListComponent implements OnInit {

  @Input() list = [];

  constructor() { }

  ngOnInit() {
  }

}
