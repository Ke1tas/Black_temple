import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [
    BookEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class BooksModule { }