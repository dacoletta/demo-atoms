import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVoicesComponent } from './menu-voices.component';

describe('MenuVoicesComponent', () => {
  let component: MenuVoicesComponent;
  let fixture: ComponentFixture<MenuVoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuVoicesComponent]
    });
    fixture = TestBed.createComponent(MenuVoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
