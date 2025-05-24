import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { ReaderListComponent } from './readers/reader-list/reader-list.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';
import { ReaderEditComponent } from './readers/reader-edit/reader-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'books/edit/:id', component: BookEditComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'authors/edit/:id', component: AuthorEditComponent },
  { path: 'readers', component: ReaderListComponent },
  { path: 'readers/edit/:id', component: ReaderEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }