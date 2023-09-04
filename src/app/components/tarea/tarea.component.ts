import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent  implements OnInit {
  @Input() tarea!: Tarea;
  @Output() deleteTarea = new EventEmitter<Tarea>();
  @Output() updateTarea = new EventEmitter<Tarea>();
  @Output() toggleCompletado = new EventEmitter<Tarea>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTareaAction(tarea: Tarea): void  {
    this.deleteTarea.emit(tarea);
  }

  updateTareaAction(tarea: Tarea): void  {
    this.updateTarea.emit(tarea);
  }

  toggleCompletadoAction(tarea: Tarea): void  {
    console.log(tarea);
    this.toggleCompletado.emit(tarea);
  }

}
