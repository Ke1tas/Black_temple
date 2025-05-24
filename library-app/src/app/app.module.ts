import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookListComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'books', component: BookListComponent },
      { path: 'books/edit/:id', component: BookEditComponent },
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      { path: '**', redirectTo: 'books', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }