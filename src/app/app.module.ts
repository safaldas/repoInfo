import { SearchService } from './search/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {UserInfoService } from './user-info.service'
@NgModule({
  declarations: [AppComponent, SearchComponent, UserInfoComponent],
  imports: [BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot([
              { path: 'search', component: SearchComponent},
              { path: 'userinfo/:full_name', component: UserInfoComponent},
              ])],
  providers: [SearchService,
    UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
