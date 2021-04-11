import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }
}
