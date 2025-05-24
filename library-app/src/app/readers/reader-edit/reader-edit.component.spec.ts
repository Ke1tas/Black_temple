import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderEditComponent } from './reader-edit.component';

describe('ReaderEditComponent', () => {
  let component: ReaderEditComponent;
  let fixture: ComponentFixture<ReaderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
