import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  imports: [MatButtonModule, MatCardModule, MatInputModule],
  exports: [MatButtonModule, MatCardModule, MatInputModule]
})
export class MaterialModules {}
