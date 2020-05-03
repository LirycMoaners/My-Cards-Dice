import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceTestComponent } from './dice-test.component';

describe('DiceTestComponent', () => {
  let component: DiceTestComponent;
  let fixture: ComponentFixture<DiceTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
