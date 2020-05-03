import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEditionComponent } from './set-edition.component';

describe('SetEditionComponent', () => {
  let component: SetEditionComponent;
  let fixture: ComponentFixture<SetEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
