import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor(private elref:ElementRef, private renderer: Renderer2) { 
const el=this.elref.nativeElement;

this.renderer.setStyle(el,"color","red");

  }

}
