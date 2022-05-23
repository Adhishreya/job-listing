import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private appElementHighlight: ElementRef) {
    this.appElementHighlight.nativeElement.style.backgroundColor = "green";
  }

  highlight(color:string){
    this.appElementHighlight.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('pink')
  }

}
