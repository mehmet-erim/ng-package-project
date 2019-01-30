import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxxValidateComponent } from './ngxx-validate.component';

describe('NgxxValidateComponent', () => {
  let component: NgxxValidateComponent;
  let fixture: ComponentFixture<NgxxValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxxValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxxValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
