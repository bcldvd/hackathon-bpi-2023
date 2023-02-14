import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSearchComponent } from './inline-search.component';



@NgModule({
  declarations: [
    InlineSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InlineSearchComponent
  ]
})
export class InlineSearchModule { }
