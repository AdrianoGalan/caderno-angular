import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDefeitoComponent } from './edit-defeito.component';

describe('EditDefeitoComponent', () => {
  let component: EditDefeitoComponent;
  let fixture: ComponentFixture<EditDefeitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDefeitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDefeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
