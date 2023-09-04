import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tarea-formulario',
  templateUrl: './tarea-formulario.component.html',
  styleUrls: ['./tarea-formulario.component.css']
})
export class TareaFormularioComponent implements OnInit {
  @Input() tareaEnEdicion: Tarea   | null = null;
  @Output() addTarea = new EventEmitter<{titulo: string, descripcion: string}>();
  @Output() updateTarea = new EventEmitter<Tarea>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(titulo: string, descripcion: string, form: NgForm): void {
    if (this.tareaEnEdicion && this.tareaEnEdicion.id) {
      this.updateTarea.emit(this.tareaEnEdicion);
      this.tareaEnEdicion = null;
  } else {
    this.addTarea.emit({ titulo, descripcion });
  }
  this.limpiarFormulario();
  form.resetForm();
  }

  limpiarFormulario(): void {
    this.tareaTitulo = '';
    this.tareaDescripcion = '';
    this.tareaEnEdicion = null;
}

cancelarEdicion(form: NgForm): void {
  this.tareaEnEdicion = null;
  this.limpiarFormulario();
  form.resetForm();
}

get tareaTitulo(): string {
  return this.tareaEnEdicion?.titulo || '';
}

set tareaTitulo(titulo: string) {
  if (this.tareaEnEdicion) {
    this.tareaEnEdicion.titulo = titulo;
  }
}

get tareaDescripcion(): string {
  return this.tareaEnEdicion?.descripcion || '';
}

set tareaDescripcion(descripcion: string) {
  if (this.tareaEnEdicion) {
    this.tareaEnEdicion.descripcion = descripcion;
  }
}

}
