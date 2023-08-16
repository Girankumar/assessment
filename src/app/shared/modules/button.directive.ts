import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements OnInit, OnChanges {
  @Input('color') color!: string
  @Input('background') background!: string
  constructor(private ElementRef: ElementRef, private Renderer2: Renderer2) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) this.color = changes['color']['currentValue']
    if (changes['background']) this.background = changes['background']['currentValue']
  }
  ngOnInit(): void {
    this.setstyle(false)
  }
  setstyle(isHover: boolean) {
    var Element = this.ElementRef.nativeElement

    this.Renderer2.setStyle(Element, 'width', '80px')
    this.Renderer2.setStyle(Element, 'height', '50px')
    this.Renderer2.setStyle(Element, 'background', this.background ? this.background : 'magenta')
    this.Renderer2.setStyle(Element, 'color', this.color ? this.color : 'white')
    this.Renderer2.setStyle(Element, 'border', isHover ? 'none' : '2px solid black')
  }
  @HostListener('mouseover')
  mouseover() {
    this.setstyle(true)
  }
  @HostListener('mouseleave')
  mouseleave() {
    this.setstyle(false)
  }
}

