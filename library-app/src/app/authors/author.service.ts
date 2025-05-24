import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Author } from '../shared/models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private authors: Author[] = [
    {
      id: 1,
      name: 'Лев Толстой',
      birthDate: new Date(1828, 8, 9),
      country: 'Россия',
      biography: 'Классик русской литературы',
      booksWritten: 30
    },
    {
      id: 2,
      name: 'Джордж Оруэлл',
      birthDate: new Date(1903, 5, 25),
      country: 'Великобритания',
      biography: 'Английский писатель и публицист',
      booksWritten: 8
    }
  ];

  getAuthors(): Observable<Author[]> {
    return of(this.authors);
  }

  getAuthor(id: number): Observable<Author> {
    const author = this.authors.find(a => a.id === id) || this.createEmptyAuthor();
    return of({...author});
  }

  saveAuthor(author: Author): Observable<Author> {
    if (author.id === 0) {
      author.id = Math.max(...this.authors.map(a => a.id), 0) + 1;
      this.authors.push({...author});
    } else {
      const index = this.authors.findIndex(a => a.id === author.id);
      if (index !== -1) {
        this.authors[index] = {...author};
      }
    }
    return of({...author});
  }

  deleteAuthor(id: number): Observable<void> {
    this.authors = this.authors.filter(a => a.id !== id);
    return of();
  }

  private createEmptyAuthor(): Author {
    return {
      id: 0,
      name: '',
      birthDate: new Date(),
      country: '',
      biography: '',
      booksWritten: 0
    };
  }
}