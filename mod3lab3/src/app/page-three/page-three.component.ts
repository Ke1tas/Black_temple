import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
})
export class PageThreeComponent{
  data: any;

  constructor(private dataService: DataService, private router: Router) {    
    this.dataService.getData().subscribe((response) => {
    this.data = response;
  });}


  goMain(): void {
    // this.router.navigate(['/']);
     this.router.navigateByUrl('/');
   }
}