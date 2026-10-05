import { Directive, ElementRef,Renderer2,OnInit } from "@angular/core";

@Directive({
selector: '[setBackground]'

})
export class SetBackground{
    // private element:ElementRef;
    backColor:string="#36454F";
    textColor:string='white';
    constructor(private element:ElementRef,private renderer:Renderer2){
    //   this.element=element;
    }
  
    ngOnInit(){
    //this.element.nativeElement.style.SetBackgroundColor='#36454F';
    //this.element.nativeElement.style.color='white';
  this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.backColor);    
  this.renderer.setStyle(this.element.nativeElement,'color',this.textColor);
}
}