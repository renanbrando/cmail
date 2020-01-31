import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  title = new Subject<string>();

  constructor() { }

  getTitle(newtitle: string) {
    document.querySelector('title').textContent = newtitle;
    this.title.next(newtitle);

  }
}
