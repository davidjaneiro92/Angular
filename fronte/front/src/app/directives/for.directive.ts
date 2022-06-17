import { Directive, Input, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm')
  numbers: number[] = [];
  
  constructor(private container: ViewContainerRef, private templete: TemplateRef<any>) {

    
   }
  ngOnInit(): void {
    for (let number of this.numbers){
      this.container.createEmbeddedView(this.templete)
    }
    console.log(this.numbers)
  }

}
