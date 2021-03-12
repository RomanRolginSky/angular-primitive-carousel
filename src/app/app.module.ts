import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'first', loadChildren: () => import('./first-carousel/first.module').then(m => m.FirstModule)},
  {path: 'second', loadChildren: () => import('./second-carousel/second.module').then(m => m.SecondModule)},
  {path: 'third', loadChildren: () => import('./third-carousel/third.module').then(m => m.ThirdModule)},
  {path: 'fourth', loadChildren: () => import('./fourth-carousel/fourth.module').then(m => m.FourthModule)},
  {path: '', pathMatch: 'full', redirectTo: 'first'}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
