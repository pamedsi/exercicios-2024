import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeTopicoComponent } from './formulario-de-topico.component';

describe('FormularioDeComentarioComponent', () => {
  let component: FormularioDeTopicoComponent;
  let fixture: ComponentFixture<FormularioDeTopicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDeTopicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDeTopicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
