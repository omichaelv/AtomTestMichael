import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { By } from '@angular/platform-browser';


import { TareaComponent } from './tarea.component';


describe('TareaComponent', () => {
  let component: TareaComponent;
  let fixture: ComponentFixture<TareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule,MatCardModule, BrowserAnimationsModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule],
      declarations: [TareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaComponent);
    component = fixture.componentInstance;

    // Proporciona un ejemplo de tarea como @Input
    component.tarea = {
      id: '1',
      titulo: 'Test Task',
      descripcion: 'This is a test task',
      completado: false
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display task title and description', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('b').textContent).toContain('Test Task');
    expect(compiled.querySelector('p').textContent).toContain('This is a test task');
  });

  it('should emit deleteTarea event when delete button is clicked', () => {
    spyOn(component.deleteTarea, 'emit');
    const button = fixture.debugElement.nativeElement.querySelector('button[color="warn"]');
    button.click();
    expect(component.deleteTarea.emit).toHaveBeenCalledWith(component.tarea);
  });

  it('should emit updateTarea event when edit button is clicked', () => {
    spyOn(component.updateTarea, 'emit');
    const editButton = fixture.debugElement.nativeElement.querySelector('button[color="primary"]');
    editButton.click();
    expect(component.updateTarea.emit).toHaveBeenCalledWith(component.tarea);
  });

  it('should emit toggleCompletado event when checkbox is changed', () => {
    spyOn(component.toggleCompletado, 'emit');
    
    const checkboxDebugElement = fixture.debugElement.query(By.css('mat-checkbox'));
    const checkboxInstance = checkboxDebugElement.componentInstance;
    
    // Flip the checkbox value
    checkboxInstance.checked = !checkboxInstance.checked;
    
    // Simulate change event
    checkboxDebugElement.triggerEventHandler('change', { checked: checkboxInstance.checked });
    
    fixture.detectChanges();

    expect(component.toggleCompletado.emit).toHaveBeenCalledWith(component.tarea);
});
});