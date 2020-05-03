import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCategoryEditionComponent } from './game-category-edition.component';

describe('GameCategoryEditionComponent', () => {
  let component: GameCategoryEditionComponent;
  let fixture: ComponentFixture<GameCategoryEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCategoryEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCategoryEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
