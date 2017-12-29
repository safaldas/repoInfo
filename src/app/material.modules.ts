import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule],
  exports: [MatButtonModule, MatCardModule],
  bootstrap:[]
})
export class MaterialModules {}
