import { NgModule } from '@angular/core';

import { CountUpDirective } from 'src/app/shared/directives/count-up.directive';

@NgModule({
  declarations: [CountUpDirective],
  exports: [CountUpDirective],
})
export class SharedModule {}
