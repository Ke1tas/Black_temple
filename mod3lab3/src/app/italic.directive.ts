import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appItalic]'
})
export class ItalicDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'font-style', 'italic');
  }
}