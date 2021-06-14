import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-demo-component',
  templateUrl: './animation-demo-component.component.html',
  styleUrls: ['./animation-demo-component.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '400px',
        paddingLeft:'90px',
        paddingTop:'40px',
        backgroundColor: 'aqua'
      })),
      state('close', style({
        height: '200px',
        paddingLeft:'50px',
        paddingTop:'40px',
        
        backgroundColor: 'blue'
      })),
      transition('open=>close', [
        animate('1s')
      ]),
      transition('close=>open',[
        animate('2s')
      ])
    ])
  ]
})
export class AnimationDemoComponentComponent implements OnInit {

  isOpen=true;

  constructor() { }

  ngOnInit(): void {
  }
  toggle(){

    this.isOpen = ! this.isOpen

  }

}
