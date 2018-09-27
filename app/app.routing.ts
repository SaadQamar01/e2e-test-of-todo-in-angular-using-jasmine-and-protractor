import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { UserListComponent } from './user-list/user-list.component';
export const appRoutes: Routes = [
  {
    path: 'todo',
    loadChildren: './todo/todo.module#TodoModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo'
  },
  // {path: '', component: TodoComponent},
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // {
  //   path: 'user', children:
  //     [
  //       { path: '', pathMatch: 'full', redirectTo: 'list' },
  //       {
  //         path: 'list', component: UserListComponent, children: [
  //           { path: 'detail/:name', component: UserComponent }
  //         ]
  //       },

  //     ]
  // },
  // { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
