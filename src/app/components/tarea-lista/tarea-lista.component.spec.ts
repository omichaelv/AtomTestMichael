import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr'; 
import { TareaFormularioComponent } from '../tarea-formulario/tarea-formulario.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { TareaListaComponent } from './tarea-lista.component';

describe('TareaListaComponent', () => {
  let component: TareaListaComponent;
  let fixture: ComponentFixture<TareaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaListaComponent,TareaFormularioComponent ],
      imports: [ HttpClientTestingModule,ToastrModule.forRoot(),FormsModule,MatFormFieldModule,MatIconModule,MatInputModule,MatCheckboxModule,BrowserAnimationsModule ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});