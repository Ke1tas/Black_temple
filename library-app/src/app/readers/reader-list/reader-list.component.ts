import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../reader.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-reader-list',
  templateUrl: './reader-list.component.html',
  styleUrls: ['./reader-list.component.css']
})
export class ReaderListComponent implements OnInit {
  readers: any[] = [];
  selectedReader: any = null;

  constructor(
    private readerService: ReaderService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadReaders();
  }

  loadReaders(): void {
    this.readerService.getReaders().subscribe(readers => {
      this.readers = readers;
    });
  }

  showDetails(content: any, reader: any): void {
    this.selectedReader = reader;
    this.modalService.open(content);
  }

  addReader(): void {
    this.router.navigate(['/readers/edit/0']);
  }

  editReader(id: number): void {
    this.router.navigate(['/readers/edit', id]);
  }

  deleteReader(id: number): void {
    if (confirm('Вы уверены, что хотите удалить этого читателя?')) {
      this.readerService.deleteReader(id).subscribe(() => {
        this.loadReaders();
      });
    }
  }
}
