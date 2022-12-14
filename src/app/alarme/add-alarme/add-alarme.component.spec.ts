import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlarmeComponent } from './add-alarme.component';

describe('AddAlarmeComponent', () => {
  let component: AddAlarmeComponent;
  let fixture: ComponentFixture<AddAlarmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlarmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAlarmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
