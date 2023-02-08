import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit{

  counter = 0;

  constructor(private share:SharedService){ }

  ngOnInit(): void {
    this.share.currentCounterValue.subscribe(count=>{
      this.counter = count;
    })
  }

  increment(){
    this.counter++;
    this.share.updataCounterValue(this.counter);
  }

}
