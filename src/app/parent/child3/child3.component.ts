import { Component } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {

  counter = 0;
  timer:any;

start(){
  this.timer = setInterval(()=>{
    this.counter ++;
  },1000)
}
stop(){
  clearInterval(this.timer);
}
}
