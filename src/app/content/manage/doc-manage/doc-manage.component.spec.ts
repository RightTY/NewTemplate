import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocManageComponent } from './doc-manage.component';

describe('DocManageComponent', () => {
  let component: DocManageComponent;
  let fixture: ComponentFixture<DocManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
