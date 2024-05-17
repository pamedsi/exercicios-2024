import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeComentarioComponent } from './formulario-de-comentario.component';

describe('FormularioDeComentarioComponent', () => {
  let component: FormularioDeComentarioComponent;
  let fixture: ComponentFixture<FormularioDeComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDeComentarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDeComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
