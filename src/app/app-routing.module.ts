import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaListaComponent } from './components/tarea-lista/tarea-lista.component';


const routes: Routes = [
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: 'tareas', component: TareaListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
