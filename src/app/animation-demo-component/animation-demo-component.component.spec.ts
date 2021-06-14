import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationDemoComponentComponent } from './animation-demo-component.component';

describe('AnimationDemoComponentComponent', () => {
  let component: AnimationDemoComponentComponent;
  let fixture: ComponentFixture<AnimationDemoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationDemoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
