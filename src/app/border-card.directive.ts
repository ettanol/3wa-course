import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(
    private el: ElementRef,
  ) { 
      this.setBorder('transparent');
   }

   @Input('appBorderCard') borderColor: string | null = null;

   @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || 'darkred');
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('transparent');
   }

   setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 1px ${color}`;
   }
}
