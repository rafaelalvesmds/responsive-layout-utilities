import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemplesComponent } from './exemples.component';

const routes: Routes = [{ path: '', component: ExemplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExemplesRoutingModule { }
