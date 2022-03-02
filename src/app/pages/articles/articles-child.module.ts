import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';

const childRoute: Routes=[
  {
    path:':id',component:ArticleComponent
  }
]

@NgModule({
    imports: [RouterModule.forChild(childRoute)],
    exports:[RouterModule]
})
export class ArticlesChildModule { }
