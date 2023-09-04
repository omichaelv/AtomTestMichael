import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TareaFormularioComponent } from './tarea-formulario.component';

describe('TareaFormularioComponent', () => {
  let component: TareaFormularioComponent;
  let fixture: ComponentFixture<TareaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaFormularioComponent ],
      imports: [FormsModule, BrowserAnimationsModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
