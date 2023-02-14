import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check(){
    return "comp2 function is called";
  }


}
