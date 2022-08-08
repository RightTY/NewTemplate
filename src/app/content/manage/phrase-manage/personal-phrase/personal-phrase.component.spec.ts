import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPhraseComponent } from './personal-phrase.component';

describe('PersonalPhraseComponent', () => {
  let component: PersonalPhraseComponent;
  let fixture: ComponentFixture<PersonalPhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalPhraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
