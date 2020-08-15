import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackapphomeComponent } from './backapphome.component';

describe('BackapphomeComponent', () => {
  let component: BackapphomeComponent;
  let fixture: ComponentFixture<BackapphomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackapphomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackapphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
