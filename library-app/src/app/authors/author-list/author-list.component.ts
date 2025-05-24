import { Component, OnInit } from '@angular/core';
import { Author } from '../../shared/models/author';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];

  constructor(
    private authorService: AuthorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this.authorService.getAuthors().subscribe(authors => {
      this.authors = authors;
    });
  }

  addAuthor(): void {
    this.router.navigate(['/authors/edit/0']);
  }

  editAuthor(id: number): void {
    this.router.navigate(['/authors/edit', id]);
  }

  deleteAuthor(id: number): void {
    if (confirm('Вы уверены, что хотите удалить этого автора?')) {
      this.authorService.deleteAuthor(id).subscribe(() => {
        this.loadAuthors();
      });
    }
  }
}
