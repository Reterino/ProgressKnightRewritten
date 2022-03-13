import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameJobComponent } from './game-job.component';

describe('GameJobComponent', () => {
  let component: GameJobComponent;
  let fixture: ComponentFixture<GameJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
