import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { Author } from '../../shared/models/author';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  authorForm: FormGroup;
  isNewAuthor: boolean = true;
  countries: string[] = ['Россия', 'США', 'Великобритания', 'Франция', 'Германия'];

  constructor(
    private fb: FormBuilder,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.authorForm = this.fb.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(3)]],
      birthDate: ['', Validators.required],
      country: ['', Validators.required],
      biography: ['', [Validators.required, Validators.minLength(20)]],
      booksWritten: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id && id !== 0) {
      this.isNewAuthor = false;
      this.authorService.getAuthor(id).subscribe(author => {
        this.authorForm.patchValue({
          ...author,
          birthDate: this.formatDate(author.birthDate)
        });
      });
    }
  }

  onSubmit(): void {
    if (this.authorForm.valid) {
      const author: Author = {
        ...this.authorForm.value,
        birthDate: new Date(this.authorForm.value.birthDate)
      };
      
      this.authorService.saveAuthor(author).subscribe({
        next: () => this.router.navigate(['/authors']),
        error: (err) => console.error('Ошибка сохранения:', err)
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/authors']);
  }

  private formatDate(date: Date): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
}