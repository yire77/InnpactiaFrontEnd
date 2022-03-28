import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificadoresComponent } from './identificadores.component';

describe('IdentificadoresComponent', () => {
  let component: IdentificadoresComponent;
  let fixture: ComponentFixture<IdentificadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
