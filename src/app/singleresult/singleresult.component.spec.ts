import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleresultComponent } from './singleresult.component';

describe('SingleresultComponent', () => {
  let component: SingleresultComponent;
  let fixture: ComponentFixture<SingleresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
