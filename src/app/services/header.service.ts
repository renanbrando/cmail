import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  filterValue = new Subject<string>();

  constructor() { }

  updateFilterValue(newValue: string) {
    this.filterValue.next(newValue)
  }
}
