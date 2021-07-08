import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittwoComponent } from './submittwo.component';

describe('SubmittwoComponent', () => {
  let component: SubmittwoComponent;
  let fixture: ComponentFixture<SubmittwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
