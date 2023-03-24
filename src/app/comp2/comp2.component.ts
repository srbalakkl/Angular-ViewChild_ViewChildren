import {Component, OnInit, ViewChild} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  @ViewChild(AppComponent) ac!:AppComponent;
  constructor() { }

  ngOnInit(): void {

  }

  check(){
    return "comp2 function is called";
  }


}
