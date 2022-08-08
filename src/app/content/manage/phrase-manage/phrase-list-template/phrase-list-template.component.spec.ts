import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseListTemplateComponent } from './phrase-list-template.component';

describe('PhraseListTemplateComponent', () => {
  let component: PhraseListTemplateComponent;
  let fixture: ComponentFixture<PhraseListTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraseListTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
