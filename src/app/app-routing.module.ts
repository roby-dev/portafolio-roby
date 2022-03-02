import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesModule } from './pages/articles/articles.module';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes =
[
  {path: 'work',component:WorkComponent},
  {path: 'articles',redirectTo:'articles'},
  {path: 'projects',component:ProjectsComponent},
  {path: 'contact',component:ContactComponent},
  {path: '', component:HomeComponent},
  {path:'**', redirectTo:'',pathMatch:'full'}  
]

@NgModule({
  declarations: [],
  imports:[
    RouterModule.forRoot(routes),
    ArticlesModule,
    BrowserModule,
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
