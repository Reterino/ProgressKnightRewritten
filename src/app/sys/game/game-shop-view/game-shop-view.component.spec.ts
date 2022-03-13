import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameShopViewComponent } from './game-shop-view.component';

describe('GameShopViewComponent', () => {
  let component: GameShopViewComponent;
  let fixture: ComponentFixture<GameShopViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameShopViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameShopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
