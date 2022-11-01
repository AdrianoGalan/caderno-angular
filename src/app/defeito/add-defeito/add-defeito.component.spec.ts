import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDefeitoComponent } from './add-defeito.component';

describe('AddDefeitoComponent', () => {
  let component: AddDefeitoComponent;
  let fixture: ComponentFixture<AddDefeitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDefeitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDefeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
