import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './pages/articles/articles.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes =
[
  {path: 'work',component:WorkComponent},
  {path: 'articles',component:ArticlesComponent},
  {path: 'projects',component:ProjectsComponent},
  {path: 'contact',component:ContactComponent},
  {path: '', redirectTo:'/work',pathMatch:'full'}  
]

@NgModule({
  declarations: [],
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
