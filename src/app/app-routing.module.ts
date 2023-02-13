import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home-bpi',
    loadChildren: () =>
      import('@features/home-bpi/home-bpi.module').then((m) => m.HomeBpiModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
