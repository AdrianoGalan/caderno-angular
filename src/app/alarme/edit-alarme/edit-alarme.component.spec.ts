import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlarmeComponent } from './edit-alarme.component';

describe('EditAlarmeComponent', () => {
  let component: EditAlarmeComponent;
  let fixture: ComponentFixture<EditAlarmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAlarmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAlarmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
