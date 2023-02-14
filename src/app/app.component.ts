import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Comp2Component} from "./comp2/comp2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ViewChildandViewChildren';
  @ViewChild('div', {static: true}) divRef!: ElementRef;
  /* Since we are accessing html element,
    I'm declaring its type as ElementRef. */
  @ViewChild(Comp2Component)compRef!:Comp2Component;
  @ViewChildren('div') vdivRef!: QueryList<any>;
  @ViewChild(Comp2Component, {static: true}) tref!: Comp2Component;
  @ViewChildren(Comp2Component) children!: QueryList<Comp2Component>;
  @ViewChildren('slot')childRef!:QueryList<any>;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    /*By default, if u try to access ViewChild/ViewChildren Variable(divRef) on ngOnInit it'll show undefined error*/

    /* Because,ViewChild/ViewChildren will only available only after the view is rendered / initialized in the DOM
  * So this will only work on ngAfterViewInit() lifecycle hook NOT on ngOnInit. */

    console.log('Using ViewChild :', this.divRef.nativeElement.innerHTML)
    console.log('Using ViewChild to access child method :',this.compRef.check(),'\n\n')

    console.log('Using ViewChildren Element Ref :', this.vdivRef.first.nativeElement.style.color = "Orange")
    console.log('Using ViewChildren Element Ref :', this.vdivRef.get(1).nativeElement.style.color = "Red")

    console.log(this.children)

    console.log(this.childRef.get(1).nativeElement.innerHTML)
    this.tref.check()
  }

}
