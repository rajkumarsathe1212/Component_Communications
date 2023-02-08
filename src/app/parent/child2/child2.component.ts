import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  toParent:any = "";

  @Output() sendData = new EventEmitter<string>();

  send(){
    this.sendData.emit(this.toParent)
  }




}

