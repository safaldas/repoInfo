import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NotFoundPageComponent } from './utils/notFoundPage';
import { MaterialModules } from './material.modules';
import { routes } from './routes';

export const COMPONENTS = [AppComponent, SearchComponent, UserInfoComponent, NotFoundPageComponent];
@NgModule({
  declarations: COMPONENTS,
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModules, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
