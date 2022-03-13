import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSkillsViewComponent } from './game-skills-view.component';

describe('GameSkillsViewComponent', () => {
  let component: GameSkillsViewComponent;
  let fixture: ComponentFixture<GameSkillsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSkillsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSkillsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
