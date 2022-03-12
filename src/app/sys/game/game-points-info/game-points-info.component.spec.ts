import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePointsInfoComponent } from './game-points-info.component';

describe('GamePointsInfoComponent', () => {
  let component: GamePointsInfoComponent;
  let fixture: ComponentFixture<GamePointsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePointsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePointsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
