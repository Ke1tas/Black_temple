import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { RouterModule, Routes } from '@angular/router';
import { confirmInGuard, confirmOutGuard } from './confirm.guard';
import { HttpClientModule } from '@angular/common/http';
import { ItalicDirective } from './italic.directive'; 


const appRoutes: Routes = [
  { path: 'page-one', component: PageOneComponent },
  { path: 'page-two/:id', component: PageTwoComponent, canActivate: [confirmInGuard] },
  { path: 'page-three', component: PageThreeComponent, canDeactivate: [confirmOutGuard]  },
  { path: '', redirectTo: '/page-one', pathMatch: 'full' }  // Переход по умолчанию
];

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    ItalicDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
