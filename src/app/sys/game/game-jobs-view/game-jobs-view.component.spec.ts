import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameJobsViewComponent } from './game-jobs-view.component';

describe('GameJobsViewComponent', () => {
  let component: GameJobsViewComponent;
  let fixture: ComponentFixture<GameJobsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameJobsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameJobsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
