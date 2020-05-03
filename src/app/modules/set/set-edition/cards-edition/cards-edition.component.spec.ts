import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsEditionComponent } from './cards-edition.component';

describe('CardsEditionComponent', () => {
  let component: CardsEditionComponent;
  let fixture: ComponentFixture<CardsEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
