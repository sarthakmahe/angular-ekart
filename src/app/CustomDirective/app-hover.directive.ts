import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[AppHover]'
})
export class AppHoverDirective {

  constructor(private element:ElementRef , private renderer:Renderer2) { 

  }
  @HostBinding('style.background') backgroundColor:string='black';
  @HostBinding('style.border') border:string='#28282B 2px solid';
  @HostBinding('style.color') color:string='grey';

  
}


