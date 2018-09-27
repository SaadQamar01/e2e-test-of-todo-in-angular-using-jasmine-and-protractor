import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { UserListComponent } from './user-list/user-list.component';
import { TodoModule } from './todo/todo.module';
import { appRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserComponent,
    HomeComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserAnimationsModule,
    // TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
