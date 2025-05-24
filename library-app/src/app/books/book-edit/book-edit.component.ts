import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../../shared/models/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;
  isNewBook: boolean = true;
  genres: string[] = ['Роман', 'Фантастика', 'Детектив', 'Фэнтези', 'Научная литература'];

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      id: [0],
      title: ['', Validators.required],
      publicationYear: [
        new Date().getFullYear(), 
        [Validators.required, Validators.min(1800), Validators.max(new Date().getFullYear())]
      ],
      genre: ['', Validators.required],
      isAvailable: [true],
      addedDate: [new Date()]
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id && id !== 0) {
      this.isNewBook = false;
      this.bookService.getBook(id).subscribe(book => {
        this.bookForm.patchValue(book);
      });
    }
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const book: Book = this.bookForm.value;
      this.bookService.saveBook(book).subscribe({
        next: () => this.router.navigate(['/books']),
        error: (err) => console.error('Ошибка сохранения:', err)
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/books']);
  }
}