import {Component, OnInit, ViewChild} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  @ViewChild(AppComponent, {static: true}) ac: AppComponent | undefined;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.ac?.title)//<- always show undefined error because ViewChild is not for parent component.
  }

  check() {
    return "comp2 function is called";
  }


}
