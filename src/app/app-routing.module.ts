import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardTokenGuard } from './core/guard/guard-token.guard';
import { FullComponentComponent } from './layaout/full-component/full-component.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
  path:'',
  component:FullComponentComponent, 

  canActivate: [GuardTokenGuard],
  children:[{
    path:'metricas',
    loadChildren:()=> import('./modules/metricas/metricas.module').then(m=> m.MetricasModule)
  }]
},
{
  path:'login',
  component:LoginComponent,
  
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
