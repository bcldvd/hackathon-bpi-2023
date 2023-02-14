import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectorSelectorComponent } from './sector-selector.component';



@NgModule({
  declarations: [
    SectorSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectorSelectorComponent
  ]
})
export class SectorSelectorModule { }
