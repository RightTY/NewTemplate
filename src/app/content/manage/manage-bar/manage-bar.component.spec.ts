import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBarComponent } from './manage-bar.component';

describe('ManageBarComponent', () => {
  let component: ManageBarComponent;
  let fixture: ComponentFixture<ManageBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
