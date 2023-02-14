import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkyComponent } from './linky.component';

const routes: Routes = [
  {
    path: '',
    component: LinkyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinkyRoutingModule {}
