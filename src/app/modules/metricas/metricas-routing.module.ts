import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficosComponent } from './graficos/graficos.component';
import { IdentificadoresComponent } from './identificadores/identificadores.component';

const routes: Routes = [
  {
    path:'identificadores',
    component:IdentificadoresComponent
  },
  {
    path:'graficos',
    component:GraficosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetricasRoutingModule { }
