import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartPhraseComponent } from './depart-phrase.component';

describe('DepartPhraseComponent', () => {
  let component: DepartPhraseComponent;
  let fixture: ComponentFixture<DepartPhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartPhraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
