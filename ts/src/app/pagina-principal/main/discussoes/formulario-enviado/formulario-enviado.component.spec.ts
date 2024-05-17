import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEnviadoComponent } from './formulario-enviado.component';

describe('FormularioEnviadoComponent', () => {
  let component: FormularioEnviadoComponent;
  let fixture: ComponentFixture<FormularioEnviadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEnviadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
