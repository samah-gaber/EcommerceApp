import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePdctCardComponent } from './single-pdct-card.component';

describe('SinglePdctCardComponent', () => {
  let component: SinglePdctCardComponent;
  let fixture: ComponentFixture<SinglePdctCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePdctCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePdctCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
