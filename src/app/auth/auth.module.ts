import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginpageComponent } from './containers/loginpage/loginpage.component';

const COMPONENTS = [LoginComponent, LoginpageComponent];
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: COMPONENTS,
  declarations: COMPONENTS
})
export class AuthModule {}
