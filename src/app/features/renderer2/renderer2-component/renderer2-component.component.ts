import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-renderer2-component',
  templateUrl: './renderer2-component.component.html',
  styleUrls: ['./renderer2-component.component.scss']
})
export class Renderer2ComponentComponent implements OnInit {
  //PROPERTIES
  @ViewChild('text') text!: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  //METHODS
  cambiaColore(): void {
    this.renderer.addClass(this.text.nativeElement, 'red');
    this.renderer.setStyle(this.text.nativeElement, 'cursor', 'pointer');
  }

  rimuoviColore(): void {
    this.renderer.removeClass(this.text.nativeElement, 'red')

  }

}
