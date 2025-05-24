import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Reader } from '../shared/models/reader';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  private readers: Reader[] = [
    {
      id: 1,
      fullName: 'Иванов Иван Иванович',
      email: 'ivanov@example.com',
      registrationDate: new Date('2023-01-15'),
      isActive: true,
      booksBorrowed: 2,
      phone: '+7 (123) 456-78-90'
    },
    {
      id: 2,
      fullName: 'Петрова Мария Сергеевна',
      email: 'petrova@example.com',
      registrationDate: new Date('2023-02-20'),
      isActive: false,
      booksBorrowed: 0,
      address: 'ул. Ленина, д. 10, кв. 5'
    }
  ];

  getReaders(): Observable<Reader[]> {
    return of(this.readers);
  }

  getReader(id: number): Observable<Reader> {
    const reader = this.readers.find(r => r.id === id) || this.createEmptyReader();
    return of({...reader});
  }

  saveReader(reader: Reader): Observable<Reader> {
    if (reader.id === 0) {
      reader.id = Math.max(...this.readers.map(r => r.id), 0) + 1;
      reader.registrationDate = new Date();
      this.readers.push({...reader});
    } else {
      const index = this.readers.findIndex(r => r.id === reader.id);
      if (index !== -1) {
        this.readers[index] = {...reader};
      }
    }
    return of({...reader});
  }

  deleteReader(id: number): Observable<void> {
    this.readers = this.readers.filter(r => r.id !== id);
    return of();
  }

  private createEmptyReader(): Reader {
    return {
      id: 0,
      fullName: '',
      email: '',
      registrationDate: new Date(),
      isActive: true,
      booksBorrowed: 0
    };
  }
}
