import { Component, OnInit, OnChanges, SimpleChanges, AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit, OnDestroy {
  title = 'digital-department-application';

  userName: string = '';
  greeting: string = '';

  ngOnInit(): void {
    console.log('Component Initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes detected', changes);
  }

  ngAfterContentInit(): void {
    console.log('Content initialized');
  }

  ngAfterViewInit(): void {
    console.log('View initialized');
  }

  ngOnDestroy(): void {
    console.log('Component destroyed');
  }

  setGreeting() {
    this.greeting = `Привет, ${this.userName}! (＾▽＾)`;
    console.log(this.greeting);
    alert(this.greeting);
  }
}
