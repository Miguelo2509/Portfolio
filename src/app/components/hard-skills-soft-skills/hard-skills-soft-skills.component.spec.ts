import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSkillsSoftSkillsComponent } from './hard-skills-soft-skills.component';

describe('HardSkillsSoftSkillsComponent', () => {
  let component: HardSkillsSoftSkillsComponent;
  let fixture: ComponentFixture<HardSkillsSoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSkillsSoftSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardSkillsSoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
