import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerSearchComponent } from './burger-search.component';

describe('BurgerSearchComponent', () => {
  let component: BurgerSearchComponent;
  let fixture: ComponentFixture<BurgerSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurgerSearchComponent]
    });
    fixture = TestBed.createComponent(BurgerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
