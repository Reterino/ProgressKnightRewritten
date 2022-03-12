import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSaveInfoComponent } from './header-save-info.component';

describe('HeaderSaveInfoComponent', () => {
  let component: HeaderSaveInfoComponent;
  let fixture: ComponentFixture<HeaderSaveInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSaveInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSaveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
