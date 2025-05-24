import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReaderService } from '../reader.service';
import { Reader } from '../../shared/models/reader';

@Component({
  selector: 'app-reader-edit',
  templateUrl: './reader-edit.component.html',
  styleUrls: ['./reader-edit.component.css']
})
export class ReaderEditComponent implements OnInit {
  readerForm: FormGroup;
  isNewReader: boolean = true;

  constructor(
    private fb: FormBuilder,
    private readerService: ReaderService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.readerForm = this.fb.group({
      id: [0],
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      registrationDate: [new Date()],
      isActive: [true],
      booksBorrowed: [0, [Validators.required, Validators.min(0)]],
      phone: [''],
      address: ['']
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id && id !== 0) {
      this.isNewReader = false;
      this.readerService.getReader(id).subscribe(reader => {
        this.readerForm.patchValue({
          ...reader,
          registrationDate: this.formatDate(reader.registrationDate)
        });
      });
    }
  }

  onSubmit(): void {
    if (this.readerForm.valid) {
      const reader: Reader = {
        ...this.readerForm.value,
        registrationDate: new Date(this.readerForm.value.registrationDate)
      };
      
      this.readerService.saveReader(reader).subscribe({
        next: () => this.router.navigate(['/readers']),
        error: (err) => console.error('Ошибка сохранения:', err)
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/readers']);
  }

  private formatDate(date: Date): string {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }
}
