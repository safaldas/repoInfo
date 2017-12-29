import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { MaterialModules } from './material.modules';
import { UserInfoComponent } from './user-info/user-info.component';
@NgModule({
  declarations: [AppComponent, SearchComponent, UserInfoComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
