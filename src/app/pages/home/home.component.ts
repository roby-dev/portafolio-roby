import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {


  constructor(
    public articleService:ArticlesService
  ) {    
   }

  ngOnInit(): void {
  }

}
