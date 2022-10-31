import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaDetalheComponent } from './maquina-detalhe.component';

describe('MaquinaDetalheComponent', () => {
  let component: MaquinaDetalheComponent;
  let fixture: ComponentFixture<MaquinaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquinaDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaquinaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
