import { Injectable } from '@angular/core';
import { config } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {


  constructor(private http: HttpClient) { }

  getTarea(): Observable<Tarea> {
    return this.http.get<Tarea>(config.applicationApiUrl + '/tareas');
  }

  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(config.applicationApiUrl  + '/tareas');
  }

  addTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(config.applicationApiUrl  + '/tareas', tarea);
  }

  updateTarea(tarea: Tarea): Observable<Tarea> {
    const urlbase = config.applicationApiUrl + '/tareas';
    const url = urlbase + '/'+ tarea.id ;
    return this.http.put<Tarea>(url, tarea);
  }

  deleteTarea(tarea: Tarea): Observable<Tarea> {
    const urlbase = config.applicationApiUrl + '/tareas';
    const url = urlbase + '/'+ tarea.id ;
    return this.http.delete<Tarea>(url);
  }
}
