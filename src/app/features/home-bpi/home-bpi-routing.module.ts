import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBpiComponent } from './home-bpi.component';

const routes: Routes = [
  {
    path: '',
    component: HomeBpiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeBpiRoutingModule { }
