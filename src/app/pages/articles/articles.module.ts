import { Routes,RouterModule, Router } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path:'articles',
    component : ArticleComponent,
    loadChildren:()=>import('./articles-child.module').then(m=>m.ArticlesChildModule)
  }
]

@NgModule({  
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ArticlesModule { }
