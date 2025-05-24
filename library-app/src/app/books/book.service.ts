import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../shared/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'Война и мир',
      publicationYear: 1869,
      genre: 'Роман',
      isAvailable: true,
      addedDate: new Date('2023-01-15'),
      authorId: 1
    },
    {
      id: 2,
      title: '1984',
      publicationYear: 1949,
      genre: 'Фантастика',
      isAvailable: false,
      addedDate: new Date('2023-02-20'),
      authorId: 2
    }
  ];

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  getBook(id: number): Observable<Book> {
    const book = this.books.find(b => b.id === id) || this.createEmptyBook();
    return of({...book});
  }

  saveBook(book: Book): Observable<Book> {
    if (book.id === 0) {
      book.id = Math.max(...this.books.map(b => b.id), 0) + 1;
      book.addedDate = new Date();
      this.books.push({...book});
    } else {
      const index = this.books.findIndex(b => b.id === book.id);
      if (index !== -1) {
        this.books[index] = {...book};
      }
    }
    return of({...book});
  }

  deleteBook(id: number): Observable<void> {
    this.books = this.books.filter(b => b.id !== id);
    return of();
  }

  private createEmptyBook(): Book {
    return {
      id: 0,
      title: '',
      publicationYear: new Date().getFullYear(),
      genre: '',
      isAvailable: true,
      addedDate: new Date()
    };
  }
}