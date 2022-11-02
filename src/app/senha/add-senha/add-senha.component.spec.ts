import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSenhaComponent } from './add-senha.component';

describe('AddSenhaComponent', () => {
  let component: AddSenhaComponent;
  let fixture: ComponentFixture<AddSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
