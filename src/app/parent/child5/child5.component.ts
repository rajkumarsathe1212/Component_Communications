import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit{

  counter = 0;

  constructor(private share:SharedService) { }

  ngOnInit(): void {
    this.share.currentCounterValue.subscribe((count)=>{
      this.counter = count;
    })
  }

  decrement(){
    this.counter--;
    this.share.updataCounterValue(this.counter);
  }

}
