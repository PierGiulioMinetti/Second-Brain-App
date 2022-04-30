import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Renderer2ComponentComponent } from './renderer2-component.component';

describe('Renderer2ComponentComponent', () => {
  let component: Renderer2ComponentComponent;
  let fixture: ComponentFixture<Renderer2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Renderer2ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Renderer2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
