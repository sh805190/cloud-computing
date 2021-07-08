import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitoneComponent } from './submitone.component';

describe('SubmitoneComponent', () => {
  let component: SubmitoneComponent;
  let fixture: ComponentFixture<SubmitoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
