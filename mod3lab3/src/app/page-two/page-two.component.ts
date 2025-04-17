import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
})
export class PageTwoComponent{
  id! :string

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }
  goMain(): void {
    // this.router.navigate(['/']);
     this.router.navigateByUrl('/');
   }
}
