import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConviteAAcaoComponent } from './convite-a-acao.component';

describe('ConviteAAcaoComponent', () => {
  let component: ConviteAAcaoComponent;
  let fixture: ComponentFixture<ConviteAAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConviteAAcaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConviteAAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
