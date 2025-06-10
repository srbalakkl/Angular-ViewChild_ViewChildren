import {Component, Host, OnInit, Optional, ViewChild} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  @ViewChild(AppComponent, {static: true}) ac: AppComponent | undefined;//<- will not work because ViewChild is not for the parent component.

  constructor(@Optional() @Host() public parent: AppComponent) {
  }

  ngOnInit(): void {
    console.log(this.ac?.title)//<- always show undefined because ViewChild is not for the parent component.
    console.log('parent==',this.parent)
  }

  check() {
    return "comp2 function is called";
  }


}
