import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './book/components/book-create/book-create.component';
import { BookListComponent } from './book/components/book-list/book-list.component';

const routes: Routes = [
  { path: 'list', component: BookListComponent },
  { path: 'create', component: BookCreateComponent },
  //{path:"login", redirectTo: AuthComponent} redireccionar a otro componente
  //{path:"about", component: AboutComponent}
  // {path:"create", component: BookCreateComponent}
  //{path: "*", component: Not Found} para cuando no se encuentra una url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
