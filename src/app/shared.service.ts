import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private counterVariable = new BehaviorSubject(0);
  currentCounterValue = this.counterVariable.asObservable();

  constructor() { }

  updataCounterValue(count:number){
    this.counterVariable.next(count);
  }
}
