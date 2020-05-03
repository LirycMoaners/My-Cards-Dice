import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceEditionComponent } from './dice-edition.component';

describe('DiceEditionComponent', () => {
  let component: DiceEditionComponent;
  let fixture: ComponentFixture<DiceEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
