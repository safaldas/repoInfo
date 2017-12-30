import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatTableModule, MatListModule, MatIconModule],
  exports: [MatButtonModule, MatCardModule, MatInputModule, MatTableModule, MatListModule, MatIconModule]
})
export class MaterialModules {}
