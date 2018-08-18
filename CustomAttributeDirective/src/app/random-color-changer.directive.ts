import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRandomColorChanger]'
})
export class RandomColorChangerDirective {
  @HostListener('mouseenter') onMouseEnter(){
    this.changeColor(this.generateColor());
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.changeColor(null);
  }

  private changeColor(color: string){
    this.el.nativeElement.style.color = color;
  }

  private generateColor(): string{
   return "#" + Math.floor(Math.random()*0xFFFFFF<<0).toString(16);
  }

  constructor(private el: ElementRef) {
  }

}
