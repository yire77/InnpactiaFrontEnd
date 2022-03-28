import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MetricasRoutingModule } from './metricas-routing.module';
import { IdentificadoresComponent } from './identificadores/identificadores.component';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { GraficosComponent } from './graficos/graficos.component';
import { NgChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    IdentificadoresComponent,
    GraficosComponent
  ],
  imports: [
    CommonModule,
    MetricasRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgChartsModule,
    MatCardModule
  ],
  providers:[
    DatePipe
  ]
})
export class MetricasModule { }
