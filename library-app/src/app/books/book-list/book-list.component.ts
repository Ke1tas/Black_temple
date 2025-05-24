import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/models/book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  addBook(): void {
    this.router.navigate(['/books/edit/0']);
  }

  editBook(id: number): void {
    this.router.navigate(['/books/edit', id]);
  }

deleteBook(id: number): void {
  if (confirm('Вы уверены, что хотите удалить эту книгу?')) {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        this.books = this.books.filter(book => book.id !== id);
      },
      error: (err) => console.error('Ошибка удаления:', err)
    });
  }
}
}