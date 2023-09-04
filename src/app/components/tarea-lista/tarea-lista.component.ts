import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../interfaces/tarea';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tarea-lista',
  templateUrl: './tarea-lista.component.html',
  styleUrls: ['./tarea-lista.component.css']
})
export class TareaListaComponent implements OnInit{
  tareas: Tarea[] = [];
  tareaEnEdicion: Tarea | null = null;

  constructor(private tareaService: TareaService,
              private toastr: ToastrService
              ) { }

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas(): void {
    this.tareaService.getTareas().subscribe({
      next: tareas => this.tareas = tareas,
      error: error => console.error('Error al obtener tareas:', error)
    });
  }

  addTarea(titulo: string, descripcion: string): void {
    titulo = titulo.trim();
    descripcion = descripcion.trim();
    if (!titulo || !descripcion) {  
      this.toastr.warning('¡Ambos campos deben estar llenos para agregar una tarea!');
      return; 
    }
    this.tareaService.addTarea({ titulo, descripcion, completado: false } as Tarea)
      .subscribe({
        next: tarea => {
          this.tareas.push(tarea);
          this.toastr.success('Tarea añadida con éxito!');
        },
        error: error => {
          console.error('Error al agregar tarea:', error);
          this.toastr.error('Error al agregar tarea.');
        }
      });
  }

  updateTarea(tarea: Tarea): void {
    this.tareaEnEdicion = { ...tarea }; 
}

  deleteTarea(tarea: Tarea): void {
    console.log('llegamos');
    this.tareas = this.tareas.filter(t => t !== tarea);
    this.tareaService.deleteTarea(tarea).subscribe({
      next: () =>{
        this.tareas = this.tareas.filter(t => t !== tarea);
        this.toastr.success('Tarea eliminada con éxito!');
        console.log('Tarea eliminada');
      },
      error: error => {
        console.error('Error al eliminar tarea:', error);
        this.toastr.error('Error al eliminar tarea.');
      }
    });
  }

  editarTareaEnDB(tarea: Tarea): void {
    this.tareaService.updateTarea(tarea).subscribe({
      next: () => {
        console.log('Tarea actualizada');
        const index = this.tareas.findIndex(t => t.id === tarea.id);
        if (index !== -1) {
          this.tareas[index] = tarea;  // Actualizar la tarea en el array
        }
        this.toastr.success('Tarea actualizada con éxito!');
      },
      error: error => {
        console.error('Error al actualizar tarea:', error);
        this.toastr.error('Error al actualizar tarea.');
      }
    });
  }
}