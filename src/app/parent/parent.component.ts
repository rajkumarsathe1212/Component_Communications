import { Component, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { Child3Component } from './child3/child3.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  // for child1
  ToChild:any = "";
  message:any = "";

  // for child2
  fromChild:any = "";

  // for child3
  @ViewChild(Child3Component)

  private child3component:Child3Component = new Child3Component();


  constructor(private share:SharedService) { }

  sendMsg(){
    this.message = this.ToChild;
  }

  receiveMessage(data:any){
    this.fromChild = data;
  }


  start(){
    this.child3component.start();
  }

  stop(){
    this.child3component.stop();
  }


  reset(){
    this.share.updataCounterValue(0);
  }
}
