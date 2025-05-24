import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReaderListComponent } from './reader-list/reader-list.component';
import { ReaderEditComponent } from './reader-edit/reader-edit.component';



@NgModule({
  declarations: [
    ReaderListComponent,
    ReaderEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReadersModule { }
